import express from "express";
import cors from "cors"; // This will work after installing @types/cors
import todoRoutes from "./routes/todoRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import {errorHandler} from "./utils/errorHandler"; // This will work after fixing errorHandler.ts

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/categories", categoryRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});