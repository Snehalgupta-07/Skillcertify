import express from "express";
import { prisma } from "../prismaClient.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { nanoid } from "nanoid";


// inside your route
const verifyHash = nanoid(20); // or use crypto.randomUUID()

const router = express.Router();


router.post("/", authMiddleware, async (req, res) => {
  const user = req.appUser;

  if (user.role !== "ISSUER") {
    return res.status(403).json({ error: "Only ISSUERS can issue certificates" });
  }

  const { recipientEmail, title, description, skills, templateId, validUntil } = req.body;

  console.log("📦 Incoming cert issue:", {
    recipientEmail, title, description, skills, templateId, validUntil,
  });

  try {
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

    const certificate = await prisma.certificate.create({
      data: {
        title,
        description,
        issuerId: user.id,
        recipientId: recipient.id,
        templateId,
        certUrl: `/cert/${uniqueUrl}`,
        validUntil: validUntil ? new Date(validUntil) : null,
        verifyHash,
      },
    });

    await prisma.qRCode.create({
      data: {
        certificateId: certificate.id,
        qrData: `http://localhost:5173/cert/${uniqueUrl}`,
      },
    });

    res.status(201).json({ certificate });
  } catch (err) {
    console.error("❌ Certificate issue error:", err.message);
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


export default router;
