
import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} from "../controllers/propertyController";
import { requireFirebaseAuth  } from "../../middlewares/jwtMiddleware"; // Firebase token check

const router = express.Router();

router.post("/",  requireFirebaseAuth,  createProperty);
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.put("/:id",  requireFirebaseAuth,  updateProperty);
router.delete("/:id",  requireFirebaseAuth,  deleteProperty);

export default router;
