import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todoSlice";

interface TodoItemProps {
  todo: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    category: string;
    completed: boolean;
  };
  setEditingTodo: (todo: any) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, setEditingTodo }) => {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
        <p>Category: {todo.category}</p>
      </div>
      <button onClick={() => setEditingTodo(todo)}>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
