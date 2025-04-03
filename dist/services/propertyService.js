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
const propertyRepository_1 = __importDefault(require("../database/propertyRepository"));
class PropertyService {
    constructor() {
        this.repository = new propertyRepository_1.default();
    }
    createProperty(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(Object.assign(Object.assign({}, data), { user_id: userId }));
        });
    }
    getAllProperties() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAll();
        });
    }
    getPropertyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield this.repository.findById(id);
            if (!property)
                throw new Error("Property not found");
            return property;
        });
    }
    updateProperty(id, data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield this.repository.findById(id);
            if (!property)
                throw { status: 404, message: "Property not found" };
            if (property.user_id !== userId)
                throw { status: 403, message: "Unauthorized" };
            return yield this.repository.update(id, data);
        });
    }
    deleteProperty(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield this.repository.findById(id);
            if (!property)
                throw { status: 404, message: "Property not found" };
            if (property.user_id !== userId)
                throw { status: 403, message: "Unauthorized" };
            return yield this.repository.delete(id);
        });
    }
}
exports.default = PropertyService;
