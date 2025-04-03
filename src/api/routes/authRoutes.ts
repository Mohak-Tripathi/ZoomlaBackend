import express, { Request, Response } from "express";
import { loginWithFirebaseToken, registerUser } from "../controllers/authController";
// import { googleLogin } from "../controllers/authController";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  await registerUser(req, res, () => {});
});


router.post("/login", async (req: Request, res: Response) => {
    await loginWithFirebaseToken(req, res, () => {});
  }); 


// router.post("/firebase-login", async (req: Request, res: Response) => {
//     await firebaseAuthorization(req, res, () => {});
//   });


// router.post("/login", loginWithFirebaseToken); // Generic login using Firebase token




  //router.post("/github-login", async (req: Request, res: Response) => {
    //     await githubLogin(req, res);
    //   }); // ✅ New Google Login Route
    

  

export default router;
