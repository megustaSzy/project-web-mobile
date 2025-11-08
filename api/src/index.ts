import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes"


const app = express();

app.use(express.json());

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)



export default app;
