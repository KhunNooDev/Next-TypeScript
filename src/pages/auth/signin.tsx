import React from "react";
import Link from "next/link";
import bcrypt from "bcryptjs";

import Form, { InputPassword, InputEmail } from "@/components/Form";

SignIn.title = "Sign In";
export default function SignIn() {
  const onSubmit = (data: Record<string, any>) => {
    // Simulating fetching user data from the database
    const userData = {
      email: "example@example.com",
      password: "$2a$10$PgyEvEx3pdRYk8ALwc0E6eGSKWSDK7GbbavA71iDMxU54Orjmbqii", // Hashed password from the database
    };
    // Compare the entered password with the hashed password from the database
    const passwordMatch = bcrypt.compareSync(data.password, userData.password);

    if (passwordMatch) {
      console.log("Password is correct : welcome");
      // Proceed with the sign-in process
    } else {
      console.log("Password is incorrect : try again");
      // Show an error message or take appropriate action
    }
    console.log(data);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded bg-white px-8 py-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Sign in</h2>
        <Form onSubmit={onSubmit} className="space-y-4">
          <InputEmail name="email" label="Email" required />
          <InputPassword name="password" label="Password" required />

          <button
            type="submit"
            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Sign in
          </button>
        </Form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account yet?{" "}
            <Link href="/auth/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
