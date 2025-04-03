"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/Review.ts
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Review extends sequelize_1.Model {
    static associate(models) {
        Review.belongsTo(models.User, { foreignKey: "user_id" });
        Review.belongsTo(models.Property, { foreignKey: "property_id" });
    }
}
Review.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    property_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    url_avatar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    descriptive_review: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "reviews",
    timestamps: true,
    indexes: [
        { fields: ["user_id"] },
        { fields: ["property_id"] },
    ],
});
exports.default = Review;
