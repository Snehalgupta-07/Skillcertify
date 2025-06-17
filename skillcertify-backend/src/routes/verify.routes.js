// routes/verify.route.js
import express from "express";
import { prisma } from "../prismaClient.js";

const router = express.Router();

/**
 * GET /api/verify/:hash
 * Public route to verify a certificate by its unique verifyHash.
 * No expiry check.
 */
router.get("/:hash", async (req, res) => {
  const { hash } = req.params;

  try {
    const cert = await prisma.certificate.findUnique({
      where: { verifyHash: hash },
      include: {
        issuer: true,
        template: true,
        qrCode: true,
      },
    });

    if (!cert) {
      return res.status(404).json({
        valid: false,
        reason: "Certificate not found",
      });
    }

    // Just mark as valid if found
    res.json({
      valid: true,
      certificate: {
        id: cert.id,
        title: cert.title,
        issuedAt: cert.issuedAt,
        certUrl: cert.certUrl,
        certificateId: cert.certificateId,
        issuer: {
          email: cert.issuer.email,
        },
        template: {
          htmlContent: cert.template.htmlContent,
        },
        qrCode: cert.qrCode?.qrData || null,
      },
    });

  } catch (err) {
    console.error("Error verifying certificate:", err);
    res.status(500).json({ valid: false, reason: "Server error" });
  }
});

export default router;
