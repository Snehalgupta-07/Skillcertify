import nodemailer from "nodemailer";

// ✅ 1 global transporter
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port:  465,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
