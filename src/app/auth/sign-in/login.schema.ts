import { z } from "zod";

// form zod validation schema for phone number
export const loginSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't be longer than 15 digits"),
  rememberMe: z.boolean().optional(),
});

// generate form types from zod validation schema
export type LoginSchema = z.infer<typeof loginSchema>;
