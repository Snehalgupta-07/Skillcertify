import express from "express";
import { prisma } from "../prismaClient.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * GET /api/recipients/certificates
 * Fetch all certificates for the logged-in recipient
 */
router.get("/certificates", authMiddleware, async (req, res) => {
  const user = req.appUser;

  //  Only RECIPIENT 
  if (user.role !== "RECIPIENT") {
    return res.status(403).json({ error: "Only recipients can access their certificates." });
  }

  try {
    // Get all certificates the user has received
    const certificates = await prisma.certificate.findMany({
      where: {
        recipientId: user.id,
      },
      include: {
        issuer: true,
      },
      orderBy: {
        issuedAt: "desc",
      },
    });

   // frontend friendly
    const result = certificates.map((cert) => ({
      id: cert.id,
      title: cert.title,
      issuer: cert.issuer.email.split("@")[0],
      issueDate: cert.issuedAt.toISOString().split("T")[0],
      expiryDate: cert.validUntil ? cert.validUntil.toISOString().split("T")[0] : null,
      status: cert.status,
      certificateUrl: `http://localhost:5000/api/certificates/${cert.id}/download`, // or a view link
    }));

    res.json(result);
  } catch (err) {
    console.error("Failed to fetch recipient certificates:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

export default router;
