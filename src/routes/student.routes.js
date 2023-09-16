const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const { createStudent, getStudents, getStudentById, deleteStudent } = require('../controllers/student.controllers');


// Ruta para crear un nuevo alumno
router.post('/students', createStudent);
//Para obtener todos los alumnos creados
router.get('/students', getStudents);
// Para obtener un alumno por su ID
router.get('/students/:id', getStudentById);
// Ruta para eliminar un alumno por ID
router.delete('/students/:id', deleteStudent);



module.exports = router;