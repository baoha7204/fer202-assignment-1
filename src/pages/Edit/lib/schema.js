import dayjs from "dayjs";
import { z } from "zod";

export const EditFormSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, { message: "Title is required" })
    .max(64, { message: "Title must not exceed 64 characters" }),
  image: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" })
    .url({ message: "Invalid URL" }),
  description: z
    .string()
    .max(512, { message: "Description must not exceed 512 characters" }),
  weeks: z.coerce
    .number({ required_error: "Weeks should be integer number" })
    .int({ message: "Weeks should be integer number" })
    .gt(1, { message: "Weeks must be at least 1" })
    .safe(),
  active: z.boolean(),
  date: z.instanceof(dayjs),
});
