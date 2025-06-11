import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/user.routes.js';
import certificateRoutes from './routes/certificate.routes.js';
import templateRoutes from './routes/templates.routes.js';
import publicRoutes from './routes/public.routes.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});


app.use('/api/users', userRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api', publicRoutes);

app.get('/', (req, res) => {
  res.send('SkillCertify API running 👨‍💻');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
