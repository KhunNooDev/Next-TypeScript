import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

import Form, { InputPassword, InputEmail } from "@/components/Form";

SignIn.title = "Sign In";
export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (data: Record<string, any>) => {
    try {
      const response = await axios.post("/api/auth/signin", data);
      console.log(response.data); // You can do something with the response if needed

      // Redirect to the home page after successful sign-in
      router.push("/");
    } catch (error) {
      if (
        (error as AxiosError).response &&
        (error as AxiosError).response?.status === 401
      ) {
        console.log(
          "Invalid credentials: Please check your email and password"
        );
        // Display an error message to the user
      } else {
        console.log("Error:", error);
        // Handle other types of errors or show a generic error message
      }
    }
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
