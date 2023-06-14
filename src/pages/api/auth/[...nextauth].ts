import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import User from "@/utils/database/models/User";
import connectDB from "@/utils/database/db";

const options: NextAuthOptions = {
  providers: [
    Credentials({
      // The name to display on the sign-in form (e.g., "Email and Password")
      name: "Email and Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (
        credentials: Record<"email" | "password", string> | undefined
      ) => {
        try {
          if (!credentials) {
            // Return null if no credentials are provided
            return Promise.resolve(null);
          }

          const { email, password } = credentials;
          await connectDB();
          const user = await User.findOne({ email });

          if (user) {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (passwordMatch) {
              // Return the user object if authentication succeeds
              return Promise.resolve(user);
            } else {
              // Return an error response if password does not match
              return Promise.resolve(null);
            }
          } else {
            // Return null if user not found
            return Promise.resolve(null);
          }
        } catch (error) {
          // Handle any errors that occur during authentication
          return Promise.reject(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // The path to your sign-in page
    signOut: "/auth/signout", // The path to your sign-out page
    error: "/auth/error", // The path to your error page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
