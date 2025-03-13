import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  category: string;
  completed: boolean;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) state.todos[index] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
