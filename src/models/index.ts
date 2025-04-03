import  User  from "./user";
import  Property  from "./property";
import  Review  from "./review";

const models = { User, Property, Review };

// Register relationships
Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models;
