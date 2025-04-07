import PropertyRepository from "../database/propertyRepository";

class PropertyService {
  private repository: PropertyRepository;

  constructor() {
    this.repository = new PropertyRepository();
  }

  async createProperty(data: any, userId: string) {
    return await this.repository.create({ ...data, user_id: userId });
  }

  async getAllProperties() {
    return await this.repository.findAll();
  }

//   async getPropertyById(id: string) {
//     const property = await this.repository.findById(id);
//     if (!property) throw new Error("Property not found");
//     return property;
//   }

  async getSinglePropertyById(id: string) {
    const property = await this.repository.findPropertyById(id);
    if (!property) throw new Error("Property not found");
    return property;
  }

  async updateProperty(id: string, data: any, userId: string) {
    const property = await this.repository.findById(id);
    if (!property) throw { status: 404, message: "Property not found" };
    if (property.user_id !== userId)
      throw { status: 403, message: "Unauthorized" };

    return await this.repository.update(id, data);
  }

  async deleteProperty(id: string, userId: string) {
    const property = await this.repository.findById(id);
    if (!property) throw { status: 404, message: "Property not found" };
    if (property.user_id !== userId)
      throw { status: 403, message: "Unauthorized" };

    return await this.repository.delete(id);
  }
}

export default PropertyService;
