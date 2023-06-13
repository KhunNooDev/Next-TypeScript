import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Form, { InputText, InputEmail, InputPassword } from "@/components/Form";

SignUp.title = "Sign Up";
export default function SignUp() {
  const router = useRouter();

  const onSubmit = async (data: Record<string, any>) => {
    try {
      const response = await axios.post("/api/auth/signup", data);
      console.log(response.data); // You can do something with the response if needed

      // Redirect to the home page after successful sign-up
      router.push("/auth/signin");
    } catch (error) {
      console.log("Error:", error);
      // Handle the error or show an error message
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded bg-white px-8 py-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Sign up</h2>
        <Form onSubmit={onSubmit} className="space-y-4">
          <InputText name="name" label="Name" required />
          <InputEmail name="email" label="Email" required />
          <InputPassword name="password" label="Password" required />
          <InputPassword
            name="confirmPassword"
            label="Confirm Password"
            required
          />

          <button
            type="submit"
            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Sign up
          </button>
        </Form>

        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
