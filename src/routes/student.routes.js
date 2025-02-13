import { Router } from "express";
import { getAllStudents, getStudentById, createStudent, editStudent, changeStudentState } from "../controllers/student.controllers.js";

const router = Router();

router.post("/student", createStudent);

router.get("/student", getAllStudents);

router.get("/student/:id", getStudentById);

router.put("/student/:id", editStudent);

router.patch("/student/:id/state", changeStudentState);




export default router;
