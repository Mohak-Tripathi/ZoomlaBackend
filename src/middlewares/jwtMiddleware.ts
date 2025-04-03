// // 


// middleware/firebaseAuth.ts
// import { Request, Response, NextFunction } from "express";
import AuthService from "../services/authService";

// export const requireFirebaseAuth = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const authHeader = req.headers.authorization;
//     const token = authHeader?.split(" ")[1];

//     if (!token) {
//       console.warn("❌ No token found in request headers.");
//      res.status(401).json({ message: "Missing Firebase token" });
//       return; // 👈 important
//     }

//     // 🔹 Verify token using your custom service method
//     const decodedUser = await AuthService.verifyFirebaseToken(token);

//     // 🔹 Attach user to req for downstream use
//     req.user = decodedUser;

//     // 🔹 Log useful debugging information
//     console.log("✅ Firebase Auth Successful");
//     console.log("🔐 User UID:", decodedUser.uid);
//     console.log("📧 Email:", decodedUser.email);
//     console.log("🧾 Full Decoded Token:", decodedUser);
//     console.log("🌐 Request Path:", req.path);
//     console.log("📡 Request Method:", req.method);

//     next();

    
//   } catch (err: any) {
//     console.error("❌ Firebase Auth Middleware Error:", err.message);
//     res.status(403).json({ message: "Invalid or expired token" });
//     return; // 👈 important
//   }
// };



// import { Request, Response, NextFunction } from "express";
// import admin from "firebase-admin";
// import { User } from "../models/User";

// export const requireFirebaseAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const authHeader = req.headers.authorization;
//     const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

//     if (!token) {
//       res.status(401).json({ error: "No token provided" });
//       return;
//     }

//     const decodedToken = await admin.auth().verifyIdToken(token);
//     const firebase_uid = decodedToken.uid;

//     const user = await User.findOne({ where: { firebase_uid } });

//     if (!user) {
//       res.status(401).json({ error: "User not found" });
//       return;
//     }

//     req.user = user;
//     next(); // ✅ Important
//   } catch (err) {
//     console.error("Auth Error:", err);
//     res.status(401).json({ error: "Invalid or expired token" });
//   }
// };



// middleware/firebaseAuth.ts
import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

import User  from "../models/user";

export const requireFirebaseAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      console.warn("❌ No token found in request headers.");
      res.status(401).json({ message: "Missing Firebase token" });
      return;
    }

    // Step 1: Verify Firebase token
    const decodedToken = await admin.auth().verifyIdToken(token);

    console.log(decodedToken, "decodedToken")
    const firebase_uid = decodedToken.uid;

    // Step 2: Fetch the actual user from your DB
    const user = await User.findOne({ where: { firebase_uid } });

    if (!user) {
      res.status(401).json({ message: "User not found in DB" });
      return;
    }

    // Step 3: Attach full user model to req.user
    //@ts-ignore
    req.user = user;

    console.log("✅ Firebase Auth Successful");
    console.log("🔐 User ID:", user.id);
    console.log("📧 Email:", user.email);

    next();
  } catch (err: any) {
    console.error("❌ Firebase Auth Middleware Error:", err.message);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
