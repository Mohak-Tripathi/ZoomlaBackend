import admin from "../config/firebase";
import UserRepository from "../database/userRepository";
import { UserAttributes } from "../models/user";

class UserService {
  private repo = new UserRepository();

  async createUser(data: Partial<UserAttributes>) {
    return await this.repo.createUser(data);
  }

  async findOrCreateFromFirebase(firebase_uid: string, email: string, name?: string) {
    let user = await this.repo.findByFirebaseUid(firebase_uid);
    if (!user) {
      user = await this.repo.createUser({
        firebase_uid,
        email,
        name: name || "No Name",
        user_type: "buyer"
      });
    }
    return user;
  }

  async getAllUsers() {
    return this.repo.getAllUsers();
  }

  async getUserById(id: string) {
    return this.repo.getUserById(id);
  }

  async updateUser(id: string, data: Partial<UserAttributes>) {
    return this.repo.updateUser(id, data);
  }

  async deleteUser(id: string) {
    const user = await this.repo.getUserById(id);
    if (!user) throw new Error("User not found");
    await admin.auth().deleteUser(user.firebase_uid);
    return this.repo.deleteUser(id);
  }
}

export default UserService;
