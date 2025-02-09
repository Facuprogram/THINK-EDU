import { Router } from "express";
import { createAssignments, editAssignments } from "../controllers/assignment.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post('/assignment', createAssignments);

router.put('/assignment', editAssignments);



export default router;
