import { useState } from "react";
import { useSession } from "next-auth/react";

import Form, { InputPassword, InputEmail, InputText } from "@/components/Form";

Profile.title = "Profile settings";
Profile.requireAuth = true;
export default function Profile() {
  const { data: session } = useSession();

  const onSubmit = async (data: Record<string, any>) => {
    console.log(data);
    // try {
    //   const response = await axios.post("/api/auth/signup", data);
    //   console.log(response.data); // You can do something with the response if needed
    //   // Redirect to the home page after successful sign-up
    // } catch (error) {
    //   console.log("Error:", error);
    //   // Handle the error or show an error message
    // }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      {session && (
        <div className="w-96 rounded bg-white px-8 py-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Profile Settings</h2>
          <Form onSubmit={onSubmit} className="space-y-4">
            <InputText
              name="name"
              label="Name"
              defaultValue={session.user?.name || ""}
              required
            />
            <InputEmail
              name="email"
              label="Email"
              defaultValue={session.user?.email || ""}
              required
            />

            <button
              type="submit"
              className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              Update Profile
            </button>
          </Form>
        </div>
      )}
    </main>
  );
}
