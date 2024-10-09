import { z } from 'zod';

// form zod validation schema (only password will be validated now)
export const loginSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

// generate form types from zod validation schema
export type LoginSchema = z.infer<typeof loginSchema>;
