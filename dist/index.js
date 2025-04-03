"use strict";
// import express, { Application } from "express";
// import { ApolloServer } from "apollo-server-express";
// import { resolvers, typeDefs } from "./graphql/schema"
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
// const startServer = async () => {
//   const app: Application = express(); // Explicitly declare type Application
//   const server = new ApolloServer({ typeDefs, resolvers });
//   await server.start();
//   server.applyMiddleware({ app }); // Apply middleware
//   app.get("/", (req, res) => {
//     res.send("GraphQL API is running! Visit /graphql");
//   });
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
//   });
// };
// startServer();
// import express, { Request, Response } from "express";
// const app = express();
// const PORT = process.env.PORT || 5000;
// // Middleware
// app.use(express.json()); // Enable JSON parsing
// // Sample Route
// app.get("/", (req: Request, res: Response) => {
//     res.send("🚀 Express Server is Running!");
// });
// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
// Import Model
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const authRoutes_1 = __importDefault(require("./api/routes/authRoutes"));
const properties_1 = __importDefault(require("./api/routes/properties"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Test database connection
// testDatabaseConnection();
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.sequelize.sync({ alter: true }); // Sync models with database
        console.log("✅ Database synchronized successfully.");
    }
    catch (error) {
        console.error("❌ Error syncing database:", error);
    }
});
// Sync DB after testing the connection
(0, database_1.testDatabaseConnection)().then(syncDatabase);
// Routes
app.use("/api/v1/properties", properties_1.default);
app.use("/api/v1/auth", authRoutes_1.default);
// const generateToken = async () => {
//   const uid = "PZpAdQBHtGdYSIguTbJl2uRuLSO2"; // Replace with a real Firebase user UID
//   try {
//     const token = await admin.auth().createCustomToken(uid);
//     console.log("Firebase ID Token:", token);
//   } catch (error) {
//     console.error("Error generating token:", error);
//   }
// };
// generateToken();
// Root Route
app.get("/", (req, res) => {
    res.send("🚀 Quick Commerce Backend is Running!");
});
// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
app.listen(5000, "0.0.0.0", () => {
    console.log(`🚀 Server running on http://0.0.0.0:5000`);
});
