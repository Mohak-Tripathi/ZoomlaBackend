// import express, { Application } from "express";
// import { ApolloServer } from "apollo-server-express";
// import { resolvers, typeDefs } from "./graphql/schema"


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




// import "./types/express/index"
// import "./types/express/index"

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize, testDatabaseConnection } from "./config/database";
import properties from "./api/routes/properties";
import userRoutes from "./api/routes/userRoutes";

import reviewRoutes from "./api/routes/reviewRoutes";





dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
// testDatabaseConnection();


// const syncDatabase = async () => {
//     try {
//       await sequelize.sync({ alter: true }); // Sync models with database
//       console.log("✅ Database synchronized successfully.");
//     } catch (error) {
//       console.error("❌ Error syncing database:", error);
//     }
//   };
  
//   // Sync DB after testing the connection
//   testDatabaseConnection().then(syncDatabase);



// 💡 This should be before sync or route usage


// Now connect & sync
testDatabaseConnection().then(async () => {
  await sequelize.sync({ alter: true });
  console.log("✅ Database synchronized successfully.");
});

// Routes
app.use("/api/v1/properties", properties);
app.use("/api/v1/auth", userRoutes);




// After user/property routes
app.use("/api/v1/reviews", reviewRoutes);




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

