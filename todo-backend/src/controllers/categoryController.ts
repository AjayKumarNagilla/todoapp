import { Request, Response } from "express";
import { Category } from "../models/categoryModel";
import { addCategory, getCategories, deleteCategory } from "../services/categoryService";

// Get all categories
export const getAllCategories = (req: Request, res: Response) => {
  const categories = getCategories();
  res.json(categories);
};

// Create a new category
export const createCategory = (req: Request, res: Response) => {
  const newCategory: Category = req.body;
  const category = addCategory(newCategory);
  res.status(201).json(category);
};

// Delete a category
export const deleteCategoryById = (req: Request, res: Response) => {
  const { id } = req.params;
  const success = deleteCategory(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};