import * as z from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .describe("email")
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .describe("password")
    .min(8, { message: "Password must be at least 8 characters long" }),
});
