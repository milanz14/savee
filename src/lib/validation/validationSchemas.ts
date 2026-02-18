import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Must be a valid email address."),
  password: z.string().min(10, "Password must be at least 10 characters."),
});

export const transactionSchema = z.object({
  amount: z.coerce.number(),
  category: z.string().min(1, "Category is required."),
  date: z.coerce.date(),
  description: z.string().min(1, "Description is required."),
  type: z.string().min(1, "Type is required."),
});
