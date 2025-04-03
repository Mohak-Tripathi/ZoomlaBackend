import User from "../models/user";

class UserRepository {
  async createUser(data: any) {
    return await User.create(data);
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id: string) {
    return await User.findByPk(id);
  }

  async updateUser(id: string, data: any) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    return await user.update(data);
  }

  async deleteUser(id: string) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    return await user.destroy();
  }

  async findByFirebaseUid(uid: string) {
    return await User.findOne({ where: { firebase_uid: uid } });
  }
}

export default UserRepository;
