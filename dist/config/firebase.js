"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const dotenv_1 = __importDefault(require("dotenv"));
const firebaseServiceAccountKey_json_1 = __importDefault(require("./firebaseServiceAccountKey.json"));
dotenv_1.default.config();
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebaseServiceAccountKey_json_1.default),
});
exports.default = firebase_admin_1.default;
