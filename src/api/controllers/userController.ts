import { Request, Response } from "express";
import admin from "../../config/firebase";
import UserService from "../../services/userService"

const userService = new UserService();

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name, user_type, phone_number, url_avatar } = req.body;

    const firebaseUser = await admin.auth().createUser({ email, password });

    const user = await userService.createUser({
      firebase_uid: firebaseUser.uid,
      email,
      name,
      user_type,
      phone_number,
      url_avatar
    });

    res.status(201).json({ user });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];
    if (!firebaseToken) return res.status(400).json({ message: "Missing Firebase ID token" });

    const decoded = await admin.auth().verifyIdToken(firebaseToken);

    //@ts-ignore
    const user = await userService.findOrCreateFromFirebase(decoded.uid, decoded.email, decoded.name);

    res.status(200).json({ user });
  } catch (err: any) {
     res.status(401).json({ message: err.message });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
  
    // if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).json({message: "user deleted successfully"});
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
