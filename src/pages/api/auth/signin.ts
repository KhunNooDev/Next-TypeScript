import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import User from "@/utils/database/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      // Find the user in the database based on the email
      const user = await User.findOne({ email });

      if (user) {
        // Compare the entered password with the hashed password from the database
        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (passwordMatch) {
          console.log("Password is correct: Welcome");
          // Proceed with the sign-in process

          // Return a success response
          res.status(200).json({ message: "Sign-in successful" });
        } else {
          console.log("Password is incorrect: Try again");
          // Return an error response
          res.status(401).json({ message: "Invalid credentials" });
        }
      } else {
        console.log("User not found");
        // Return an error response
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.log("Error:", error);
      // Return an error response
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    // Return a method not allowed response
    res.status(405).json({ message: "Method not allowed" });
  }
}
