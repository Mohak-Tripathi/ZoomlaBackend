import express from "express";
import {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController";

const router = express.Router();

router.post("/register", register); // email+password registration
 //@ts-ignore
router.post("/login", login);       // Firebase token-based login (manual or Google)

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
