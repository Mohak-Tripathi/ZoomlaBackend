import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../config/database";

export interface WishlistAttributes {
  id: string;
  user_id: string;
  property_id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WishlistCreationAttributes extends Optional<WishlistAttributes, "id"> {}

class Wishlist extends Model<WishlistAttributes, WishlistCreationAttributes> implements WishlistAttributes {
  public id!: string;
  public user_id!: string;
  public property_id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Wishlist.belongsTo(models.User, { foreignKey: "user_id" });
    Wishlist.belongsTo(models.Property, { foreignKey: "property_id" });
  }
}

Wishlist.init(
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
  },
  {
    sequelize,
    tableName: "wishlist",
    timestamps: true,
    indexes: [
      { fields: ["user_id"] },
      { fields: ["property_id"] },
      {
        unique: true,
        fields: ["user_id", "property_id"], // One user can only wishlist a property once
      },
    ],
  }
);

export default Wishlist;
