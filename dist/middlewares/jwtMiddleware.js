"use strict";
// // 
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
exports.requireFirebaseAuth = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const user_1 = __importDefault(require("../models/user"));
const requireFirebaseAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
        if (!token) {
            console.warn("❌ No token found in request headers.");
            res.status(401).json({ message: "Missing Firebase token" });
            return;
        }
        // Step 1: Verify Firebase token
        const decodedToken = yield firebase_admin_1.default.auth().verifyIdToken(token);
        const firebase_uid = decodedToken.uid;
        // Step 2: Fetch the actual user from your DB
        const user = yield user_1.default.findOne({ where: { firebase_uid } });
        if (!user) {
            res.status(401).json({ message: "User not found in DB" });
            return;
        }
        // Step 3: Attach full user model to req.user
        req.user = user;
        console.log("✅ Firebase Auth Successful");
        console.log("🔐 User ID:", user.id);
        console.log("📧 Email:", user.email);
        next();
    }
    catch (err) {
        console.error("❌ Firebase Auth Middleware Error:", err.message);
        res.status(403).json({ message: "Invalid or expired token" });
    }
});
exports.requireFirebaseAuth = requireFirebaseAuth;
