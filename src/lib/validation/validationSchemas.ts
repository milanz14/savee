import { z } from "zod";

export const userSchema = z.object({
  email: z.email("Enter a valid email."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

export const transactionSchema = z.object({
  amount: z.coerce.number(),
  category: z.string().min(1, "Category is required."),
  date: z.coerce.date(),
  description: z.string().min(1, "Description is required."),
  type: z.string().min(1, "Type is required."),
});
