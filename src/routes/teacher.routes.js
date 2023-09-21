import { Router } from "express";

const router = Router();

router.post("/teacher", getTeacher);

export default router;