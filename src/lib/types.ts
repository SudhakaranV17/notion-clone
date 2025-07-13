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

export const CreateWorkspaceFormSchema = z.object({
  workspaceName: z
    .string()
    .describe("Workspace Name")
    .min(1, "workspace name must be min of 1 character"),
  logo: z.any(),
});
