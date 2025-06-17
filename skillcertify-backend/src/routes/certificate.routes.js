import express from "express";
import { prisma } from "../prismaClient.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";
import { sendCertificateEmail } from "../utils/sendCertificateEmail.js";
import puppeteer from "puppeteer";

const router = express.Router();

/**
 * POST /api/certificates
 */
router.post("/", authMiddleware, async (req, res) => {
  const issuer = req.appUser;

  if (issuer.role !== "ISSUER") {
    return res.status(403).json({ error: "Only ISSUERS can issue certificates." });
  }

  const {
    recipientEmail,
    title,
    description,
    templateId,
    validUntil,
    ...dynamicFields // capture all extra fields!
  } = req.body;

  try {
    // Upsert recipient
    const recipient = await prisma.user.upsert({
      where: { email: recipientEmail },
      update: {},
      create: {
        email: recipientEmail,
        role: "RECIPIENT",
        firebaseUid: `guest_${Date.now()}`,
      },
    });

    const uniqueUrl = nanoid(10);
    const verifyHash = nanoid(20);
    const nextNumber = Math.floor(Math.random() * 100000);
    const certificateId = `CERT-${new Date().getFullYear()}-${String(nextNumber).padStart(5, '0')}`;

    // ✅ Save dynamic fields to DB!
    const certificate = await prisma.certificate.create({
      data: {
        title,
        description,
        issuerId: issuer.id,
        recipientId: recipient.id,
        templateId: parseInt(templateId),
        certUrl: `/cert/${uniqueUrl}`,
        verifyHash,
        certificateId,
        dynamicFields, // store as JSON
        validUntil: validUntil ? new Date(validUntil) : null,
      },
    });
    const qrLink = `http://localhost:5173/cert/${uniqueUrl}`;
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrLink)}`;
    
    await prisma.qRCode.create({
      data: {
        certificateId: certificate.id,
        qrData: qrImageUrl,
      },
    });

    // Send email
    try {
      await sendCertificateEmail({
        recipientName: recipient.email.split('@')[0],
        recipientEmail,
        certificate: {
          ...certificate,
          certUrl: `/cert/${uniqueUrl}`,
        },
      });

      await prisma.emailLog.create({
        data: {
          certId: certificate.id,
          recipient: recipientEmail,
          status: "SENT",
          userId: issuer.id,
        },
      });

    } catch (emailError) {
      console.error(" Email sending failed:", emailError);
      await prisma.emailLog.create({
        data: {
          certId: certificate.id,
          recipient: recipientEmail,
          status: "FAILED",
          userId: issuer.id,
        },
      });
    }

    res.status(201).json({
      success: true,
      certificate,
    });

  } catch (err) {
    console.error(" Certificate creation failed:", err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/certificates/:id/download
 */
router.get("/:id/download", async (req, res) => {
  const certId = parseInt(req.params.id);

  try {
    const cert = await prisma.certificate.findUnique({
      where: { id: certId },
      include: { template: true, recipient: true, issuer: true, qrCode: true },
    });

    if (!cert) return res.status(404).json({ error: "Certificate not found" });

    let html = cert.template.htmlContent;

    // Build full replacement map:
    const data = {
      recipientName: cert.recipient.email.split("@")[0],
      issuerName: cert.issuer.email.split("@")[0],
      issueDate: cert.issuedAt.toDateString(),
      certificateId: cert.certificateId,
      qrCodeUrl: cert.qrCode.qrData,
      ...cert.dynamicFields, //  include your saved fields!
    };

    for (const key in data) {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      html = html.replace(regex, data[key]);
    }

    const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${cert.certificateId}.pdf"`,
    });
    res.send(pdfBuffer);

  } catch (err) {
    console.error("PDF generation failed:", err);
    res.status(500).json({ error: "Failed to generate PDF" });
  }
});

/**
 * GET /api/certificates/:id
 * Fetch single certificate with template, issuer & QR
 */
router.get("/:id", async (req, res) => {
  const certId = parseInt(req.params.id);

  try {
    const cert = await prisma.certificate.findUnique({
      where: { id: certId },
      include: {
        template: true,
        issuer: true,
        recipient: true,
        qrCode: true,
      },
    });

    if (!cert) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    res.json({
      id: cert.id,
      title: cert.title,
      issuedAt: cert.issuedAt,
      validUntil: cert.validUntil,
      certUrl: cert.certUrl,
      verifyHash: cert.verifyHash,
      template: {
        htmlContent: cert.template.htmlContent,
      },
     //placeholders
      issuerName: cert.issuer.email.split('@')[0],
      recipientName: cert.recipient.email.split('@')[0],
      courseName: cert.title, // or cert.dynamicFields.courseName if stored
      duration: cert.dynamicFields?.duration || '',
      completionDate: cert.dynamicFields?.completionDate || '',
      certificateId: cert.certificateId,
      issueDate: cert.issuedAt,
      qrCodeUrl: cert.qrCode ? cert.qrCode.qrData : null,
    });

  } catch (err) {
    console.error(" Error fetching certificate:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});



export default router;
