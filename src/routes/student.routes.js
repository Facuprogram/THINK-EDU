import { Router } from "express";


const router = Router();

router.post,("/student", createStudent);

router.get,("/student", getStudents);

router.get("/student", getStudentById);

router.delete("/student", deleteStudent);



export default router;