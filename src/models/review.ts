// models/Review.ts
import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../config/database";

export interface ReviewAttributes {
  id: string;
  user_id: string;
  property_id: string;
  name: string;
  url_avatar?: string;
  descriptive_review?: string;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  public id!: string;
  public user_id!: string;
  public property_id!: string;
  public name!: string;
  public url_avatar?: string;
  public descriptive_review?: string;
  public rating!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Review.belongsTo(models.User, { foreignKey: "user_id" });
    Review.belongsTo(models.Property, { foreignKey: "property_id" });
  }
}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    property_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url_avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descriptive_review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    sequelize,
    tableName: "reviews",
    timestamps: true,
    indexes: [
        { fields: ["user_id"] },
        { fields: ["property_id"] },
      ],
  }
);

export default Review;
