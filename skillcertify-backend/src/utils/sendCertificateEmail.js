import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { transporter } from "./mailService.js";

// ✅ Proper __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function sendCertificateEmail({ recipientName, recipientEmail, certificate }) {
  // ✅ This guarantees the correct path:
  const templatePath = path.join(__dirname, "../templates/certificateEmail.html");

  let html = fs.readFileSync(templatePath, "utf-8");

  html = html
    .replace(/{{recipientName}}/g, recipientName)
    .replace(/{{title}}/g, certificate.title)
    .replace(/{{certificateUrl}}/g, `${process.env.FRONTEND_URL}${certificate.certUrl}`)
    .replace(/{{year}}/g, new Date().getFullYear());

  return transporter.sendMail({
    from: `"SkillCertify" <${process.env.SMTP_USER}>`,
    to: recipientEmail,
    subject: `🎓 Your Certificate: ${certificate.title}`,
    html,
  });
}
