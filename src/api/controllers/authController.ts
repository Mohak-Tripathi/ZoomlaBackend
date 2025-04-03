import { NextFunction, Request, Response } from "express";
import AuthService from "../../services/authService";




// {
//     "uid": "l9KyhcMg7NMuzRLPj7alRoGGOa13",
//     "email": "mohaktripathi8@gmail.com",
//     "firebaseToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0MjQ3MTQzNSwiZXhwIjoxNzQyNDc1MDM1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0BxdWljay1jb21tZXJjZS1mZTU4ZC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWZic3ZjQHF1aWNrLWNvbW1lcmNlLWZlNThkLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoibDlLeWhjTWc3Tk11elJMUGo3YWxSb0dHT2ExMyJ9.WANuUXcEnjazYSXOD1ckCq0ae-kWaSBtdpwsZH9WfMf8oZseisjXe9YSoqR5uyn3iF_oPHgIM3-WYx5n_5vGdCK09qRx7p8dkBuJqH4SXZWCVPGDFmQ4FT3XrjK5UsvbBRjiSarkFzHqLQWRfruZy5m0ecN7h-JxflZAH991oAfNeLNbfPP4_62xjTUvXUBzJc6_ou4ewGsuxWRb-OkcyjO2kqw9ZLtZgDe8z8azD2IDe4G45rytoYVfkNImB2-T9SwxFRET0ghxUj9TwLO8Jg2YVKealhfpniB4AZkZQ7I1U09bWN46ZaOmfk9GoTaLn5hOszFnB18fQrzxdgkHNQ"
// }


// Way of test  in terminal 
// curl -X POST "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyC_P5fbU5XEioxUlNpYruMHnXy4j3YEWek" \
// -H "Content-Type: application/json" \
// -d '{
//   "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0MjQ1NTYwOSwiZXhwIjoxNzQyNDU5MjA5LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0BxdWljay1jb21tZXJjZS1mZTU4ZC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWZic3ZjQHF1aWNrLWNvbW1lcmNlLWZlNThkLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiUFpwQWRRQkh0R2RZU0lndVRiSmwydVJ1TFNPMiJ9.RIBZduBSCO8j2wIlQtopXQGquDTX8NSHBxZE1P4WZdNgRcCFeLEMz94qi_b16lkcduhVwJZ2kC3F7LgZdt8_-vLHu-GjTG5159ZbVuWxig7tPY9qCfKuc0w7BSC4h2GNXITROthxFvKyM-S8vvLz8aP4x0OhCYWNdzg-414YuRDg4JvTBHPS9sO6urIQjjE7ByWt2h1YaADwsnzyl4kpCnhYWgzfCphvnbtoZyspVIMNOrRftLsu4TL8g9gqZqX8B-KD5KOvDcWratHC9hl_AKhbyq8B4zLWnXi8xxpPH9GrFSqp9RsCmUn91JnGdtLYtv276GInlMEtGF1iYGR_Rw",
//   "returnSecureToken": true
// }'

export const registerUser = async (req: Request, res: Response, next: NextFunction)  => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

      const user = await AuthService.registerUser(email, password);

    // // Generate backend JWT (just like Google login)
    // const jwtToken = AuthService.generateJwtToken(user);

    console.log("✅ New User Registered:", user);

    return res.status(201).json({ user});

  } catch (error:any) {
    return res.status(500).json({ message: error.message });
  }
};



export const loginWithFirebaseToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const firebaseToken = req.headers.authorization?.split(" ")[1];
  
      if (!firebaseToken) {
        return res.status(400).json({ message: "Firebase token is required" });
      }
  
      // 🔹 Verify Firebase Token
      const user = await AuthService.verifyFirebaseToken(firebaseToken);
      
      // 🔹 Generate Backend JWT Token
      // const jwtToken = AuthService.generateJwtToken(user);
  
      return res.status(200).json({ user});
    } catch (error:any) {
      return res.status(401).json({ message: error.message });
    }
  };






  export const firebaseAuthorization = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const firebaseToken = req.headers.authorization?.split(" ")[1];
      if (!firebaseToken) {
        return res.status(400).json({ message: "Firebase token is required" });
      }
  
      const user = await AuthService.verifyFirebaseToken(firebaseToken);

  
      return res.status(200).json({ user});
    } catch (error:any) {
      return res.status(401).json({ message: error.message });
    }
  };

  // export const githubLogin = async (req: Request, res: Response) => {
  //   try {
  //       // b289ef069656c26f0a3c3755188008b22e43eb42
  //     const firebaseToken = req.headers.authorization?.split(" ")[1];
  
  //     if (!firebaseToken) {
  //       return res.status(400).json({ message: "Firebase token is required" });
  //     }
  
  //     // 🔹 Verify Firebase Token
  //     const user = await AuthService.verifyFirebaseToken(firebaseToken);
  
  //     // 🔹 Generate Backend JWT Token
  //     const jwtToken = AuthService.generateJwtToken(user);
  
  //     return res.status(200).json({ user, jwtToken });
  //   } catch (error:any) {
  //     return res.status(401).json({ message: error.message });
  //   }
  // };

