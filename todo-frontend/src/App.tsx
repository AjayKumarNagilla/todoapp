import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import CategoryForm from "./components/CategoryForm";
import FilterSort from "./components/FilterSort";
import TodoList from "./components/TodoList";
import "./styles/global.css";

const App: React.FC = () => {
  const [refreshCategories, setRefreshCategories] = useState(false);

  const handleCategoryAdded = () => {
    setRefreshCategories((prev) => !prev); // Toggle state to trigger re-fetch
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <CategoryForm onCategoryAdded={handleCategoryAdded} />
      <TodoForm refreshCategories={refreshCategories} />
      <FilterSort />
      <TodoList />
    </div>
  );
};

export default App;