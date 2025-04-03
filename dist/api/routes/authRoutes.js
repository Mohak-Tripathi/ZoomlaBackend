"use strict";
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
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
// import { googleLogin } from "../controllers/authController";
const router = express_1.default.Router();
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, authController_1.registerUser)(req, res, () => { });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, authController_1.loginWithFirebaseToken)(req, res, () => { });
}));
// router.post("/firebase-login", async (req: Request, res: Response) => {
//     await firebaseAuthorization(req, res, () => {});
//   });
// router.post("/login", loginWithFirebaseToken); // Generic login using Firebase token
//router.post("/github-login", async (req: Request, res: Response) => {
//     await githubLogin(req, res);
//   }); // ✅ New Google Login Route
exports.default = router;
