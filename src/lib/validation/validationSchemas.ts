import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(1, "Name is required."),
    email: z.email("Must be a valid email address."),
    password: z.string().min(10, "Password must be at least 10 characters."),
    confirmPassword: z
      .string()
      .min(10, "Password must be at least 10 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const transactionSchema = z.object({
  amount: z.coerce.number().min(1, "Amount is required.") as z.ZodNumber,
  category: z.string().min(1, "Category is required."),
  // commented out code used for testing without throwing validation errors
  date: z.coerce.date() as z.ZodDate,
  // date: z.coerce.date().optional(),
  description: z.string().min(1, "Description is required."),
  // description: z.string().optional(),
  type: z.string().min(1, "Type is required."),
  // type: z.string().optional(),
});
