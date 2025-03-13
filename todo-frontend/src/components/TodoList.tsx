import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TodoItem from "./TodoItem";
import FilterSort from "./FilterSort";
import TodoForm from "./TodoForm";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Extract unique categories from todos
  const categories = Array.from(new Set(todos.map(todo => todo.category))).sort();

  // Filter todos based on status and category
  const filteredTodos = todos.filter((todo) => {
    const statusMatch = filterStatus === "all" || (filterStatus === "completed" ? todo.completed : !todo.completed);
    const categoryMatch = !selectedCategory || todo.category === selectedCategory; // Filter by selected category
    return statusMatch && categoryMatch;
  });

  // Sort todos based on category, due date, or creation date
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    // Sort by category first
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category); // Sort by category alphabetically
    }

    // If categories are the same, sort by the selected sort criteria (dueDate or createdAt)
    return sortBy === "dueDate"
      ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <div className="todo-list">
      <h2>Todo List</h2>

      {/* Filter & Sort Component */}
      <FilterSort
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSelectedCategory={setSelectedCategory} // Pass setSelectedCategory for category filtering
        categories={categories} // Pass the extracted categories
      />

      {/* Todo Form for Adding & Editing */}
      <TodoForm editingTodo={editingTodo} setEditingTodo={setEditingTodo} />

      {/* Render Todos */}
      {sortedTodos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        sortedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setEditingTodo={setEditingTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
