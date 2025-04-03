"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const propertyController_1 = require("../controllers/propertyController");
const jwtMiddleware_1 = require("../../middlewares/jwtMiddleware"); // Firebase token check
const router = express_1.default.Router();
router.post("/", jwtMiddleware_1.requireFirebaseAuth, propertyController_1.createProperty);
router.get("/", propertyController_1.getAllProperties);
router.get("/:id", propertyController_1.getPropertyById);
router.put("/:id", jwtMiddleware_1.requireFirebaseAuth, propertyController_1.updateProperty);
router.delete("/:id", jwtMiddleware_1.requireFirebaseAuth, propertyController_1.deleteProperty);
exports.default = router;
