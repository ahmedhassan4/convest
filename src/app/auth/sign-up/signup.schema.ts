import { z } from 'zod';
import {
  validatePassword,
  validateConfirmPassword,
} from '../common-rules'; // Updated path based on the new structure

export const signUpSchema = z
  .object({
    // code: z.string().nonempty('Institution code is required'),
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // Show error on confirmPassword field
    message: "Passwords do not match",
  });

// generate form types from zod validation schema
export type SignUpSchema = z.infer<typeof signUpSchema>;
