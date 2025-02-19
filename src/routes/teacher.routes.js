import { Router } from "express";
import { getTeacherData } from "../controllers/teacher.controllers.js";

const router = Router();

router.post("/teacher", getTeacherData);

export default router;