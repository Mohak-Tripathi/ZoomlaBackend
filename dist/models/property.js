"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/Property.ts
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Property extends sequelize_1.Model {
    static associate(models) {
        Property.belongsTo(models.User, { foreignKey: "user_id" });
        Property.hasMany(models.Review, { foreignKey: "property_id" });
    }
}
Property.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    property_type: {
        type: sequelize_1.DataTypes.ENUM("Houses", "Condos", "Duplexes", "Studios", "Villas", "Apartments", "Townhomes", "Others"),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    area: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    num_of_bedroom: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    num_of_bathroom: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    facilities: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.ENUM("car_parking", "gym", "wifi", "swimming", "restaurant", "pet_center", "sports_center", "laundry")),
    },
    hero_image_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    gallery_image_urls: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    geolocation: {
        type: sequelize_1.DataTypes.JSONB,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "properties",
    timestamps: true,
    indexes: [
        { fields: ["user_id"] },
        { fields: ["city"] },
        { fields: ["property_type"] },
    ]
});
exports.default = Property;
