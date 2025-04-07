
import express from "express";
import {
  createProperty,
  getAllProperties,
//   getPropertyById,
  updateProperty,
  deleteProperty,
  getMyPropertyById
} from "../controllers/propertyController";
import { requireFirebaseAuth  } from "../../middlewares/jwtMiddleware"; // Firebase token check

const router = express.Router();

// requireFirebaseAuth, 
router.post("/", createProperty);
router.get("/", getAllProperties);
// router.get("/:id", getPropertyById);
router.get("/:id", getMyPropertyById);
router.put("/:id",   updateProperty);
router.delete("/:id",  deleteProperty);

export default router;
