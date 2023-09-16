import { Router } from "express";
//import {Student} from "../models/student";
import { createStudent, getStudents, getStudentById, deleteStudent } from "../controllers/student.controllers";
const router = Router()


// Ruta para crear un nuevo alumno
router.post('/students', createStudent);
//Para obtener todos los alumnos creados
router.get('/students', getStudents);
// Para obtener un alumno por su ID
router.get('/students/:id', getStudentById);
// Ruta para eliminar un alumno por ID
router.delete('/students/:id', deleteStudent);



export default router