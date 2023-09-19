import { Router } from "express";
import { 
    login, 
    register, 
    logout, 
    profile,
    students,
    teacher,

 } from "../controllers/auth.controllers.js";
 import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);


router.post("/profile", authRequired, profile);

router.post("/students", students);

router.post("/teacher", teacher);

export default router; 
