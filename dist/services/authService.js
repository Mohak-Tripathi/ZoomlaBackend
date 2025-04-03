"use strict";
// import admin from "../config/firebase";
// import jwt from "jsonwebtoken";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// class AuthService {
//   // Verify Firebase ID Token
//    // 🔹 Register User (SignUp)
//    async registerUser(email: string, password: string) {
//     try {
//       const userRecord = await admin.auth().createUser({
//         email,
//         password,
//         emailVerified: false,
//         disabled: false,
//       });
//       console.log("✅ New User Registered:", userRecord.uid);
//       // Generate Firebase ID Token
//       const firebaseToken = await admin.auth().createCustomToken(userRecord.uid);
//       return { uid: userRecord.uid, email, firebaseToken };
//     } catch (error: any) {
//       throw new Error(`Firebase Signup Error: ${error.message}`);
//     }
//   }
//   //this is like a login contoller login. 
//   async verifyFirebaseToken(firebaseToken: string) {
//     try {
//       const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
//       console.log("✅ Decoded Firebase Token:", decodedToken); // LOGGING FOR DEBUGGING
//       return decodedToken;
//     } catch (error:any) {
//         console.error("❌ Firebase Token Verification Error:", error.code, error.message);
//         throw new Error(`Invalid Firebase Token: ${error.message}`);
//     }
//   }
//   // Generate JWT Token for Backend Authentication
//   generateJwtToken(user: any) {
//     const payload = { uid: user.uid, email: user.email };
//     return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "7d" });
//   }
// }
//   // 🔹 Login User (SignIn)
//   // async loginUser(email: string, password: string) {
//   //   try {
//   //     // Firebase does not handle login validation for email/password directly in the backend.
//   //     // Frontend should send Firebase ID Token after login.
//   //     throw new Error("Email & password login is handled by Firebase on the frontend.");
//   //   } catch (error: any) {
//   //     throw new Error(`Firebase Login Error: ${error.message}`);
//   //   }
//   // }
// export default new AuthService();
// services/authService.ts
const firebase_1 = __importDefault(require("../config/firebase"));
class AuthService {
    registerUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRecord = yield firebase_1.default.auth().createUser({
                email,
                password,
                emailVerified: false,
                disabled: false,
            });
            console.log("✅ New User Registered:", email, password, userRecord.uid);
            // Return the Firebase token to frontend (optional, frontend can get it too)
            const firebaseToken = yield firebase_1.default.auth().createCustomToken(userRecord.uid);
            return { uid: userRecord.uid, email: userRecord.email, firebaseToken };
        });
    }
    verifyFirebaseToken(firebaseToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const decodedToken = yield firebase_1.default.auth().verifyIdToken(firebaseToken);
            console.log("✅ Decoded Firebase Token:", decodedToken);
            return decodedToken;
        });
    }
}
exports.default = new AuthService();
