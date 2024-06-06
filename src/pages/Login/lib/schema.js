import { z } from "zod";

export const LoginFormSchema = z.object({
  user: z
    .string({ required_error: "Username is required" })
    .min(1, { message: "Username is required" })
    .max(256, { message: "Username must not exceed 256 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" })
    .max(128, { message: "Password must not exceed 128 characters" }),
});
