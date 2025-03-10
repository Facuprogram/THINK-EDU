import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRoutes, studentRoutes, assignmentRoutes, teacherRoutes } from './src/routes/index.js';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',  // URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  // Si usas cookies o tokens
  }));

app.use("/api", authRoutes);
app.use("/api", studentRoutes);
app.use("/api", assignmentRoutes);
app.use("/api", teacherRoutes);


export default app; 
