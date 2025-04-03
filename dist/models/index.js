"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const property_1 = __importDefault(require("./property"));
const review_1 = __importDefault(require("./review"));
const models = { User: user_1.default, Property: property_1.default, Review: review_1.default };
// Register relationships
Object.values(models).forEach((model) => {
    if (model.associate) {
        model.associate(models);
    }
});
exports.default = models;
