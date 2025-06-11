import express from "express";
import { prisma } from "../prismaClient.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔐 Create a new certificate template (ISSUER only)
router.post("/", authMiddleware, async (req, res) => {
  const { title, description, htmlContent } = req.body;
  const issuer = req.appUser;

  console.log("🛠️ Request to create template");
  console.log("User:", issuer);
  console.log("Body:", { title, description, htmlContent });

  if (issuer.role !== "ISSUER") {
    return res.status(403).json({ error: "Only ISSUERS can create templates" });
  }

  try {
    const template = await prisma.certificationTemplate.create({
      data: {
        title,
        description,
        issuerId: issuer.id,
        htmlContent,
      },
    });

    res.status(201).json(template);
  } catch (err) {
    console.error("❌ Template creation error:", err.message);
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// 📄 Get all templates for the logged-in issuer (optional)
router.get("/", authMiddleware, async (req, res) => {
  const issuer = req.appUser;

  try {
    const templates = await prisma.certificationTemplate.findMany({
      where: {
        issuerId: issuer.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(templates);
  } catch (err) {
    console.error("❌ Template fetch error:", err);
    res.status(500).json({ error: "Failed to fetch templates" });
  }
});

export default router;
