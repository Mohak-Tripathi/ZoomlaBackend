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
exports.deleteProperty = exports.updateProperty = exports.getPropertyById = exports.getAllProperties = exports.createProperty = void 0;
const propertyService_1 = __importDefault(require("../../services/propertyService"));
const propertyService = new propertyService_1.default();
const createProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("User ID:", (_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
        const result = yield propertyService.createProperty(req.body, req.user.id);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createProperty = createProperty;
const getAllProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield propertyService.getAllProperties();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllProperties = getAllProperties;
const getPropertyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield propertyService.getPropertyById(req.params.id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getPropertyById = getPropertyById;
const updateProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("User ID:", req.user);
        const result = yield propertyService.updateProperty(req.params.id, req.body, req === null || req === void 0 ? void 0 : req.user.id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});
exports.updateProperty = updateProperty;
const deleteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield propertyService.deleteProperty(req.params.id, req === null || req === void 0 ? void 0 : req.user.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});
exports.deleteProperty = deleteProperty;
