import { Request, Response } from "express";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../services/todoService"; // Correct import

// Get all todos
export const getAllTodos = (req: Request, res: Response) => {
  const todos = getTodos();
  res.json(todos);
};

// Add a new todo
export const createTodo = (req: Request, res: Response) => {
    const newTodo = req.body;
    const todo = addTodo(newTodo);
    res.status(201).json(todo);
  };

// Update a todo
export const updateTodoById = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  const todo = updateTodo(id, updatedTodo);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Delete a todo
export const deleteTodoById = (req: Request, res: Response) => {
    const { id } = req.params;
    const success = deleteTodo(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  };