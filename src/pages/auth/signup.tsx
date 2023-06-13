import React from "react";
import Link from "next/link";
import bcrypt from "bcryptjs";
import Form, { InputText, InputEmail, InputPassword } from "@/components/Form";

SignUp.title = "Sign Up";
export default function SignUp() {
  const onSubmit = (data: Record<string, any>) => {
    const { password, confirmPassword, ...userData } = data;

    if (password !== confirmPassword) {
      console.log("Password and Confirm Password do not match");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      ...userData,
      password: hashedPassword,
    };

    console.log(newUser);
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
