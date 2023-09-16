const express = require('express');
const router = express.Router();
//const Teacher = require('../models/teacher');
const { getTeacherData } = require('../controllers/teacher.controllers');


// Ruta para obtener los datos del profesor
router.get('/teacher', getTeacherData);
// Para obtener al profesor por su ID
//router.get('/teachers/:id', getTeacherById);

module.exports = router;