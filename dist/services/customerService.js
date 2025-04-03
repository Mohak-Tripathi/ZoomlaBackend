"use strict";
// import { GenerateSalt, GeneratePassword, GenerateSignature } from "../utils/auth";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerService {
    SignUp(userInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = userInputs;
            // Generate salt & hash password
            // let salt = await GenerateSalt();
            // let userPassword = await GeneratePassword(password, salt);
            // Simulate user creation (Replace later with DB)
            // const newUser = { id: "1", email, password: userPassword, salt };
            // Generate JWT token
            // const token = await GenerateSignature({ email, id: newUser.id });
            // return { id: newUser.id, token };
            // Create user in PostgreSQL
            //  const newUser = await Customer.create({
            //     email,
            //     password
            // });
            return { id: "1" };
        });
    }
    SignIn(userInputs) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = userInputs;
            // Simulate user fetch from DB (Replace later)
            const existingUser = { id: "1", email, password: "hashedpassword", salt: "randomsalt" };
            return { id: existingUser.id, token: "fake-jwt-token" };
        });
    }
}
exports.default = CustomerService;
