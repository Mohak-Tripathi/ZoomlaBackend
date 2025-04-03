  // src/types/express/index.d.ts
// import  User  from "../../models/user";
import  User from "../../models/user"

declare global {
  namespace Express {
    interface Request {
      user?: User; // 👈 You’re attaching the full user object to req.user
    }
  }
}


// ✅ This is needed so TypeScript treats this file as a module
export {};