# SkillCertify

Securely issue, share, and verify digital certificates via a full-stack web platform.

---

## 🚀 Features

* **Role-Based Authentication**: Firebase Auth for ISSUER and RECIPIENT roles.
* **Template Management**: Create, preview, and save customizable HTML certificate templates.
* **Certificate Issuance**: Dynamically generate certificates with placeholders, unique IDs, and QR codes.
* **PDF Generation**: Server-side HTML-to-PDF conversion using Puppeteer.
* **Public Verification**: Anyone can verify certificate authenticity via a public hash-based URL.
* **Recipient Dashboard**: Recipients can view, search, filter, and download their certificates.
* **Email Notifications**: Automatic sending of certificate links via SendGrid/Nodemailer.
  
  

---

## 🛠️ Tech Stack

* **Frontend**: React, React Router, Tailwind CSS
* **Backend**: Node.js, Express, Prisma ORM, MySQL
* **Authentication**: Firebase Authentication
* **PDF & QR**: Puppeteer for PDF, qrserver API for QR codes
* **Email**: Nodemailer (SMTP) or SendGrid
* **Deployment**: Docker / Heroku / Vercel

---

## 📦 Installation

### Prerequisites

* Node.js >= 16
* MySQL database
* Firebase project credentials

### Backend Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-org/skillcertify.git
   cd skillcertify/backend
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Environment Variables**
   Create a `.env` file with:

   ```ini
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB_NAME"
   FIREBASE_SERVICE_ACCOUNT="<path-to-firebase-service-account.json>"
   SMTP_HOST=smtp.example.com
   SMTP_USER=your-smtp-user
   SMTP_PASSWORD=your-smtp-password
   SMTP_SECURE=true
   ```
4. **Run Migrations**

   ```bash
   npx prisma migrate dev
   ```
5. **Start Server**

   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate**

   ```bash
   cd skillcertify/frontend
   ```
2. **Install**

   ```bash
   npm install
   ```
3. **Environment**
   Create `.env`:

   ```ini
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
4. **Start**

   ```bash
   npm start
   ```

---

## 🧑‍💻 Usage

1. **Register** as ISSUER or RECIPIENT.
2. **ISSUER**: Create templates, issue certificates, monitor email logs.
3. **RECIPIENT**: View dashboard, search, filter, view/download certificates.
4. **Public Verification**: Visit `/verify/:hash` to confirm authenticity.

---

## 📋 API Endpoints

| Method | URL                              | Description                          |
| ------ | -------------------------------- | ------------------------------------ |
| POST   | `/api/users/register`            | Register new user                    |
| GET    | `/api/users/me`                  | Get logged-in user                   |
| POST   | `/api/templates`                 | Create certificate template (ISSUER) |
| GET    | `/api/templates`                 | List ISSUER’s templates              |
| POST   | `/api/certificates`              | Issue new certificate (ISSUER)       |
| GET    | `/api/certificates/:id/download` | Download certificate as PDF          |
| GET    | `/api/certificates/:id`          | Get certificate details by ID        |
| GET    | `/api/recipients/certificates`   | List recipient’s certificates        |
| PATCH  | `/api/certificates/:id/status`   | Update certificate status            |
| DELETE | `/api/certificates/:id`          | Delete a certificate                 |
| GET    | `/api/verify/:hash`              | Public verify by hash                |

---

## 📂 Project Structure

```
backend/    # Express server, Prisma, routes
frontend/   # React app with pages and components
prisma/     # Prisma schema & migrations
templates/  # Email templates (HTML)
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---



---

*Built with ❤ by Snehal Gupta*
