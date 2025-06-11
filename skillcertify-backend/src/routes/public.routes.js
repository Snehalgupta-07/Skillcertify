import express from "express";
import { prisma } from "../prismaClient.js";

const router = express.Router();

// Public certificate view
router.get("/certificates/public/:certUrl", async (req, res) => {
  const { certUrl } = req.params;

  try {
    const cert = await prisma.certificate.findFirst({
      where: { certUrl: `/cert/${certUrl}` },
      include: {
        issuer: { select: { email: true } },
        recipient: { select: { email: true } },
        template: { select: { htmlContent: true } },
        qrCode: true,
      },
    });

    if (!cert) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    res.json({
      certificate: {
        id: cert.id,
        title: cert.title,
        description: cert.description,
        issuedAt: cert.issuedAt,
        validUntil: cert.validUntil,
        issuerEmail: cert.issuer.email,
        recipientEmail: cert.recipient.email,
        htmlContent: cert.template.htmlContent,
        qrData: cert.qrCode?.qrData || null,
        status: cert.status,
        verified: true,
      },
    });
  } catch (err) {
    console.error("Public cert view error:", err);
    res.status(500).json({ error: "Failed to fetch public certificate" });
  }
});

export default router;
