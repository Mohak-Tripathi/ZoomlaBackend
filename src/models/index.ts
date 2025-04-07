// import  User  from "./user";
// import  Property  from "./property";
// import  Review  from "./review";

// const models = { User, Property, Review };

// // Register relationships
// Object.values(models).forEach((model: any) => {
//   if (model.associate) {
//     model.associate(models);
//   }
// });

// export default models;





import User from "./user";
import Property from "./property";
import Review from "./review";

User.hasMany(Property, { foreignKey: "user_id" });
Property.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

Property.hasMany(Review, { foreignKey: "property_id" });
Review.belongsTo(Property, { foreignKey: "property_id" });

export {
  User,
  Property,
  Review
};





// models/index.ts
// import User from "./user";
// import Property from "./property";
// import Review from "./review";

// const models = {
//   User,
//   Property,
//   Review,
// };

// // 🔁 Register associations (if defined in model)
// Object.values(models).forEach((model: any) => {
//   if (typeof model.associate === "function") {
//     model.associate(models);
//   }
// });

// export { User, Property, Review }; // 👈 export individually for use elsewhere
// export default models;