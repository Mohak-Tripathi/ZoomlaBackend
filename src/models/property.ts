// models/Property.ts
import { Model, DataTypes, Optional } from "sequelize";
import {sequelize} from "../config/database"; 

export interface PropertyAttributes {
  id: string;
  user_id: string;
  title: string;
  property_type:
    | "Houses"
    | "Condos"
    | "Duplexes"
    | "Studios"
    | "Villas"
    | "Apartments"
    | "Townhomes"
    | "Others";
  description?: string;
  address: string;
  city: string;
  country: string;
  price: number;
  area: number;
  num_of_bedroom: number;
  num_of_bathroom: number;
  rating?: number;
  facilities?: string[]; // 🔄 updated from enum[]
//   facilities?: (
//     | "car_parking"
//     | "gym"
//     | "wifi"
//     | "swimming"
//     | "restaurant"
//     | "pet_center"
//     | "sports_center"
//     | "laundry"
//   )[];
  hero_image_url?: string;
  gallery_image_urls?: string[];
  geolocation?: {
    lat: number;
    lng: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PropertyCreationAttributes extends Optional<PropertyAttributes, "id"> {}

class Property
  extends Model<PropertyAttributes, PropertyCreationAttributes>
  implements PropertyAttributes
{
  public id!: string;
  public user_id!: string;
  public title!: string;
  public property_type!: PropertyAttributes["property_type"];
  public description?: string;
  public address!: string;
  public city!: string;
  public country!: string;
  public price!: number;
  public area!: number;
  public num_of_bedroom!: number;
  public num_of_bathroom!: number;
  public rating?: number;
  public facilities?: string[];
  
//   public facilities?: PropertyAttributes["facilities"];
  public hero_image_url?: string;
  public gallery_image_urls?: string[];
  public geolocation?: { lat: number; lng: number };
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    Property.belongsTo(models.User, { foreignKey: "user_id" });
    Property.hasMany(models.Review, { foreignKey: "property_id" });
  }
}

Property.init(
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    property_type: {
      type: DataTypes.ENUM(
        "Houses",
        "Condos",
        "Duplexes",
        "Studios",
        "Villas",
        "Apartments",
        "Townhomes",
        "Others"
      ),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_of_bedroom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_of_bathroom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    facilities: {
        type: DataTypes.ARRAY(DataTypes.STRING), // ✅ changed from ENUM[] to STRING[]
      },
    // facilities: {
    //   type: DataTypes.ARRAY(
    //     DataTypes.ENUM(
    //       "car_parking",
    //       "gym",
    //       "wifi",
    //       "swimming",
    //       "restaurant",
    //       "pet_center",
    //       "sports_center",
    //       "laundry"
    //     )
    //   ),
    // },
    hero_image_url: {
      type: DataTypes.STRING,
    },
    gallery_image_urls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    geolocation: {
      type: DataTypes.JSONB,
    },
  },
  {
    sequelize,
    tableName: "properties",
    timestamps: true,
    indexes: [
        { fields: ["user_id"] },
        { fields: ["city"] },
        { fields: ["property_type"] },
      ]
  }
);

export default Property;
