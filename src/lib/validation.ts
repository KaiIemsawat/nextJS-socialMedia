import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredString
    .min(5, "Must be at least 5 characters")
    .email("Invalid email address"),
  username: requiredString
    .min(3, "Must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, number, - and _ allowed"),
  password: requiredString.min(6, "Must be at least 6 characters"),
});

export type SignupValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
  content: requiredString,
  mediaIds: z.array(z.string()).max(5, "Maximum attachments allowed are 5."),
});

export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, "Must not exceed 1,000 characters"),
});

export type UpdateUserProfileValues = z.infer<typeof updateUserProfileSchema>;
