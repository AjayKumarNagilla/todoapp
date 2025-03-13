import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodoById,
  deleteTodoById,
} from "../controllers/todoController";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.put("/:id", updateTodoById);
router.delete("/:id", deleteTodoById);

export default router;