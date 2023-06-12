import { useState } from "react";
import Form, {
  InputText,
  InputPassword,
  InputEmail,
  InputNumber,
  InputCheckbox,
  InputRadio,
  InputSelect,
  InputTextarea,
  InputDate,
  InputFile,
  InputTime,
  InputColor,
  InputRange,
} from "@/components/Form";

SignIn.title = "Sign In";
export default function SignIn() {
  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen">
      <Form onSubmit={onSubmit}>
        <InputText name="name" label="Name" />
        <InputEmail name="email" label="Email" />
        <InputPassword name="password" label="Password" />
        <InputNumber name="age" label="Age" min={18} max={100} />
        <InputCheckbox name="agree" label="Agree to terms" />
        <InputRadio
          name="gender"
          label="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
        <InputSelect
          name="country"
          label="Country"
          options={[
            { label: "USA", value: "usa" },
            { label: "Canada", value: "canada" },
            { label: "UK", value: "uk" },
          ]}
        />
        <InputTextarea name="message" label="Message" />
        <InputDate name="dob" label="Date of Birth" />
        <InputFile name="avatar" label="Avatar" />
        <InputTime name="meetingTime" label="Meeting Time" />
        <InputColor name="favoriteColor" label="Favorite Color" />
        <InputRange name="rating" label="Rating" min={1} max={5} step={0.5} />
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </Form>
    </main>
  );
}
