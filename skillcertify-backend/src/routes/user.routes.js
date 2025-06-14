import express from "express";
const router = express.Router();
import authMiddleware from "../middlewares/authMiddleware.js";


router.get("/me", authMiddleware, async (req, res) => {
  const user = req.appUser;
  res.json({
    id: user.id,
    email: user.email,
    role: user.role,
  });
});


router.post("/register", authMiddleware, async (req, res) => {
  const { role } = req.body;
  const { firebaseUser } = req;

  try {
    const updatedUser = await req.prisma.user.update({
      where: { firebaseUid: firebaseUser.uid },
      data: { role },
    });

    res.json(updatedUser);
  } catch (err) {
    console.error("Error in /register:", err);
    res.status(500).json({ error: "Failed to set role" });
  }
});

export default router; 
