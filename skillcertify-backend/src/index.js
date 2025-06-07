import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

// ✅ CORS: allow frontend (React at localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

// ✅ Make prisma available on req object if needed in routes
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

// ✅ API Routes
app.use('/api/users', userRoutes);

// ✅ Health check
app.get('/', (req, res) => {
  res.send('SkillCertify API running 👨‍💻');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
