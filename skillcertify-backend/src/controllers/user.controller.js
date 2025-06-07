import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();



//create user
export const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const newUser = await prisma.user.create({
      data: { email, password, role },
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get users
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

