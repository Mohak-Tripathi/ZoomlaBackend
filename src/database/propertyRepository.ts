import  Property from "../models/property";
import  User  from "../models/user";

class PropertyRepository {
  async create(data: any) {
    return await Property.create(data);
  }

  async findAll() {
    return await Property.findAll({ include: [User] });
  }

  async findById(id: string) {
    return await Property.findByPk(id, { include: [User] });
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
