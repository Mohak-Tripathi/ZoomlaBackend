import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

const generateToken = async () => {
  const uid = "PZpAdQBHtGdYSIguTbJl2uRuLSO2"; // Replace with a real Firebase user UID
  try {
    const token = await admin.auth().createCustomToken(uid);
    console.log("Firebase ID Token:", token);
  } catch (error) {
    console.error("Error generating token:", error);
  }
};

generateToken();
