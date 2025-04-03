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
const property_1 = __importDefault(require("../models/property"));
const user_1 = __importDefault(require("../models/user"));
class PropertyRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield property_1.default.create(data);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield property_1.default.findAll({ include: [user_1.default] });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield property_1.default.findByPk(id, { include: [user_1.default] });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield property_1.default.findByPk(id);
            if (!property)
                throw new Error("Property not found");
            return yield property.update(data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const property = yield property_1.default.findByPk(id);
            if (!property)
                throw new Error("Property not found");
            return yield property.destroy();
        });
    }
}
exports.default = PropertyRepository;
