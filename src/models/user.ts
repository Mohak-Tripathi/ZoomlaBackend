// 


// models/User.ts
import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../config/database";

export interface UserAttributes {
  id: string;
  firebase_uid: string;
  name: string;
  email: string;
  phone_number?: string;
  user_type: "buyer" | "agent_independent" | "agent_agency" | "owner";
  url_avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public firebase_uid!: string;
  public name!: string;
  public email!: string;
  public phone_number?: string;
  public user_type!: "buyer" | "agent_independent" | "agent_agency" | "owner";
  public url_avatar?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  //this is imp so we can use inbuilt method of sequalize
  static associate(models: any) {
    User.hasMany(models.Property, { foreignKey: "user_id" });
    User.hasMany(models.Review, { foreignKey: "user_id" });
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firebase_uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_type: {
      type: DataTypes.ENUM("buyer", "agent_independent", "agent_agency", "owner"),
      allowNull: false,
    },
    url_avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    indexes: [
      { fields: ["email"] },
    ],
  }
);

export default User;
