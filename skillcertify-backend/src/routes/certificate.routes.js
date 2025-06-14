import express from "express";
import { prisma } from "../prismaClient.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { nanoid } from "nanoid";

const router = express.Router();

/**
 * POST /api/certificates
 * Create & issue a new certificate
 * Only ISSUER can do this
 */
router.post("/", authMiddleware, async (req, res) => {
  const issuer = req.appUser;

  // ✅ Check role
  if (issuer.role !== "ISSUER") {
    return res.status(403).json({ error: "Only ISSUERS can issue certificates." });
  }

  // ✅ Extract input data
  const {
    recipientEmail,
    title,
    description,
    templateId,
    validUntil,
    ...dynamicFields  // any extra dynamic fields
  } = req.body;

  try {
    // ✅ Create or find recipient user
    const recipient = await prisma.user.upsert({
      where: { email: recipientEmail },
      update: {},
      create: {
        email: recipientEmail,
        role: "RECIPIENT",
        firebaseUid: `guest_${Date.now()}`,
      },
    });

    // ✅ Generate unique cert URL segment & hashes
    const uniqueUrl = nanoid(10);
    const verifyHash = nanoid(20);

    // ✅ Generate certificateId like CERT-2025-00001
    // Safe & readable for recipient
    const nextNumber = Math.floor(Math.random() * 100000);
    const certificateId = `CERT-${new Date().getFullYear()}-${String(nextNumber).padStart(5, '0')}`;

    // ✅ Create certificate
    const certificate = await prisma.certificate.create({
      data: {
        title,
        description,
        issuerId: issuer.id,
        recipientId: recipient.id,
        templateId: parseInt(templateId),
        certUrl: `/cert/${uniqueUrl}`,
        verifyHash: verifyHash,
        certificateId: certificateId,
        validUntil: validUntil ? new Date(validUntil) : null,
      },
    });

    // ✅ Create QR code record
    await prisma.qRCode.create({
      data: {
        certificateId: certificate.id,
        qrData: `http://localhost:5173/cert/${uniqueUrl}`,
      },
    });

    // ✅ Return result
    res.status(201).json({
      success: true,
      certificate,
    });

  } catch (err) {
    console.error("❌ Certificate creation error:", err);
    res.status(500).json({ error: err.message });
  }
});


/**
 * (Optional) GET /api/certificates/:id
 * Could add more routes like get, update, delete
 */

export default router;
