import  Review  from "../models/review";
import  Property from "../models/property";
import  User  from "../models/user";

class PropertyRepository {
  async create(data: any) {
    return await Property.create(data);
  }

  async findAll() {
    // return await Property.findAll({ include: [User] });
    return await Property.findAll();


    
    // return await Property.findAll({
    //     include: [
    //       {
    //         model: User,
    //         attributes: ["id", "name", "email", "user_type"]
    //       }
    //     ]
    //   });
  }

  async findById(id: string) {
    // return await Property.findByPk(id, { include: [User] });
    return await Property.findByPk(id);
  }


  async findPropertyById(id: string) {
    const property = await Property.findByPk(id);
    if (!property) throw new Error("Property not found");

    const user = await User.findByPk(property.user_id, {
      attributes: ["id", "name", "email", "user_type", "url_avatar"],
    });

    const reviews = await Review.findAll({
      where: { property_id: id },
      order: [["createdAt", "DESC"]],
    });

    return {
      ...property.toJSON(),
      user,
      reviews,
    };
  }

  async update(id: string, data: any) {
    const property = await Property.findByPk(id);
    if (!property) throw new Error("Property not found");
    return await property.update(data);
  }

  async delete(id: string) {
    const property = await Property.findByPk(id);
    if (!property) throw new Error("Property not found");
    return await property.destroy();
  }
}

export default PropertyRepository;
