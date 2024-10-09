import { z } from "zod";

const validatePhoneNumber = z
  .string()
  .regex(/^(\+20)?1[0-9]{9}$/, "Invalid phone number");

export const forgetPasswordSchema = z.object({
  phoneNumber: validatePhoneNumber,
});

export type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;
