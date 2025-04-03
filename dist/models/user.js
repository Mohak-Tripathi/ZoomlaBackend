"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
// models/User.ts
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
    //this is imp so we can use inbuilt method of sequalize
    static associate(models) {
        User.hasMany(models.Property, { foreignKey: "user_id" });
        User.hasMany(models.Review, { foreignKey: "user_id" });
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    firebase_uid: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_type: {
        type: sequelize_1.DataTypes.ENUM("buyer", "agent_independent", "agent_agency", "owner"),
        allowNull: false,
    },
    url_avatar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "users",
    timestamps: true,
    indexes: [
        { fields: ["email"] },
    ],
});
exports.default = User;
