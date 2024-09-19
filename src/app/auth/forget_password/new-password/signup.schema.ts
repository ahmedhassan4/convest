import { z } from 'zod';
import { validateConfirmPassword, validatePassword } from '../../common-rules';


export const newPasswordSchema = z
  .object({
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // Show error on confirmPassword field
    message: 'Passwords do not match',
  });

// generate form types from zod validation schema
export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;
