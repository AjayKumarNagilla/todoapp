import { v4 as uuidv4 } from "uuid";
import { Category } from "../models/categoryModel";

let categories: Category[] = [];

// Get all categories
export const getCategories = () => {
  return categories;
};

// Add a new category
export const addCategory = (newCategory: Omit<Category, "id">) => {
  const category = { id: uuidv4(), ...newCategory };
  categories.push(category);
  return category;
};

// Delete a category
export const deleteCategory = (id: string) => {
  const initialLength = categories.length;
  categories = categories.filter((category) => category.id !== id);
  return categories.length !== initialLength;
};