import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRoutes, studentRoutes, assignmentRoutes, teacherRoutes } from './src/routes/index.js';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", studentRoutes);
app.use("/api", assignmentRoutes);
app.use("/api", teacherRoutes);


export default app; 
