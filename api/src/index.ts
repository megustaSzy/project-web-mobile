import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;
