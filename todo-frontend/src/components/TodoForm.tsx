import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";
import { RootState } from "../store/store";
import { v4 as uuidv4 } from "uuid";

const TodoForm: React.FC<{ editingTodo?: any; setEditingTodo?: any }> = ({ editingTodo, setEditingTodo }) => {
  const [title, setTitle] = useState(editingTodo?.title || "");
  const [description, setDescription] = useState(editingTodo?.description || "");
  const [dueDate, setDueDate] = useState(editingTodo?.dueDate || "");
  const [category, setCategory] = useState(editingTodo?.category || "");

  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const currentDate = new Date().toISOString().split("T")[0];



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


  if (dueDate < currentDate) {
    alert("Due date cannot be in the past. Please select a future date.");
    return;
  }

    if (editingTodo) {
      dispatch(updateTodo({ ...editingTodo, title, description, dueDate, category }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo({ id: uuidv4(), title, description, dueDate, category, completed: false, createdAt: new Date().toISOString() }));
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">{editingTodo ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
};

export default TodoForm;
