import { Router } from "express";


const router = Router();

router.post,("/student", createStudent);

router.get,("/student", getStudent);

router.get("/student", getStudentById);

router.delete("/student", deleteStudent);



export default router;
