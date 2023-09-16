import { Router } from "express";
//import {Teacher} from "../models/teacher";
import { getTeacherData } from "../controllers/teacher.controllers";
const router = Router();


// Ruta para obtener los datos del profesor
router.get('/teacher', getTeacherData);
// Para obtener al profesor por su ID
//router.get('/teachers/:id', getTeacherById);

export default router