import { z } from "zod";

// Todo validation schema
export const todoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  dueDate: z.string().min(1, "Due date is required"),
  category: z.string().min(1, "Category is required"),
  completed: z.boolean().default(false),
});

// Category validation schema
export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
});