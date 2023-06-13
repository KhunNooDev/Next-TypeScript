import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import connectDB from "@/utils/database/db";
import User, { IUser } from "@/utils/database/models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const { name, email, password, confirmPassword } = req.body;

      // Check if the password and confirm password match
      if (password !== confirmPassword) {
        return res
          .status(400)
          .json({ message: "Password and confirm password do not match" });
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, 10);
      //add model User
      const user = await User.create({ name, email, password: hashedPassword });

      // Return a success response
      res.status(200).json({ message: "Sign-up successful" });
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
