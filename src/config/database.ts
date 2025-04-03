//Commands for DB creation 
// sudo -u postgres psql
// CREATE DATABASE quick_commerce;


import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Create Sequelize instance with PostgreSQL connection
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {

    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false, // Disable logging in production
  }
);

// Test database connection
const testDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { sequelize, testDatabaseConnection };
