const Student = require('../models/student');

// Controlador para crear un nuevo alumno
// async function createStudent(req, res) {
//     try {
//         const newStudent = new Student(req.body); //crea nueva instancia de alumno con los datos del cuerpo de la solicitud.
//         await newStudent.save(); //lo guarda en la bd
//         res.status(201).json(newStudent); //responde con el nuevo alumno creado, checkear si hace falta esta linea o borrar.
//     } catch (error) {
//         res.status(400).json({ error: error.message }); //manejo del error.
//     }
// }

//FALTA TERMINAR.
const createStudent = (req, res) => {
  const {nameComplete, degree, numberId, quotaDay, active, telephone, address, age} = req.body;
  const newStudent = new studentModels ({
    nameComplete,
    degree,
    numberId,
    quotaDay,
    active,
    telephone,
    address,
    age
  })
}

// Controlador para obtener todos los alumnos
async function getStudents(req, res) {
  try {
    const students = await Student.find(); // Obtiene todos los alumnos desde la base de datos
    res.json(students); // Responde con la lista de alumnos
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
}

// Controlador para obtener un alumno por su ID
async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id); // Busca un alumno por su ID
    if (!student) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }
    res.json(student); // Responde con los detalles del alumno encontrado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
}


// Controlador para actualizar un alumno por su ID
// async function actualizarAlumno(req, res) {
//   try {
//     const alumnoActualizado = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!alumnoActualizado) {
//       return res.status(404).json({ message: 'Alumno no encontrado' });
//     }
//     res.json(alumnoActualizado);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }


// Controlador para eliminar un alumno por su ID
async function deleteStudent(req, res) {
  try {
    const studentDel = await Student.findByIdAndRemove(req.params.id);
    if (!studentDel) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }
    res.json({ message: 'Alumno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  //actualizarAlumno,
  deleteStudent,
};
