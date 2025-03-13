import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../features/categorySlice";

const CategoryForm: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    dispatch(addCategory(name.trim()));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Category"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
