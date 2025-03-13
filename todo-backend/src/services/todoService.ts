import { v4 as uuidv4 } from "uuid";
import { Todo } from "../models/todoModel";

let todos: Todo[] = [];

// Get all todos
export const getTodos = () => {
  return todos;
};

// Add a new todo
export const addTodo = (newTodo: Omit<Todo, "id">) => {
    const todo = { id: uuidv4(), ...newTodo };
    todos.push(todo);
    return todo;
  };

// Update a todo
export const updateTodo = (id: string, updatedTodo: Partial<Todo>) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return todos[index];
  }
  return null;
};

// Delete a todo
export const deleteTodo = (id: string) => {
    const initialLength = todos.length;
    todos = todos.filter((todo) => todo.id !== id);
    return todos.length !== initialLength;
  };