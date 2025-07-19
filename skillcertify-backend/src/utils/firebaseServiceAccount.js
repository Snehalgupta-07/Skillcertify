import admin from "firebase-admin";
import { serviceAccount } from "../../config/firebaseServiceAccountKey.js";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
