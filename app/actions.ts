"use server";

import * as z from "zod";

// Define the form schema for validation on the server
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function handleLogin(values: { email: string; password: string }) {
  // Validate the input on the server side
  const result = formSchema.safeParse(values);
  
  if (!result.success) {
    return { error: "Invalid form data" };
  }

  // Here you would typically handle the login logic,
  // e.g., by calling an authentication service.
  // For this example, we'll just log the values
  // and simulate a delay.

  console.log("Login attempt with:", result.data);

  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would return a success or error message.
  // For example:
  // if (error) {
  //   return { error: "Invalid email or password." };
  // }
  // return { success: "Logged in successfully!" };
  
  return { success: "Login successful!" };
}