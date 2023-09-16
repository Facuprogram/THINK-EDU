import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";


import authRoutes from "./src/routes/auth.routes.js";
import studentRoutes from "./src/routes/student.routes.js";
import teacherRoutes from "./src/routes/teacher.routes.js";


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", studentRoutes);
app.use("/api", teacherRoutes);


export default app; 
