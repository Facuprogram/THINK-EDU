const Teacher = require('../models/teacher');


// Controller to fetch teacher data
async function getTeacherData(req, res) {
  try {
    // You can search for the teacher using some criteria, such as name or ID
    const teacher = await Teacher.findOne({ name: 'Facundo' });

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Devuelve los datos en formato JSON
    res.json({
      name: teacher.name,
      lastName: teacher.lastName,
      contact: {
        telephone: teacher.contact.telephone,
        mail: teacher.contact.mail,
      },
      id: teacher.id,
      nameInstitution: teacher.nameInstitution,
      address: teacher.address,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Controlador para obtener un alumno por su ID
// async function getTeacherById(req, res) {
//   try {
//     const teacher = await Teacher.findById(req.params.id); // Busca un alumno por su ID
//     if (!teacher) {
//       return res.status(404).json({ message: 'Alumno no encontrado' });
//     }
//     res.json(teacher); // Responde con los detalles del alumno encontrado
//   } catch (error) {
//     res.status(500).json({ error: error.message }); // Manejo de errores
//   }
// }

module.exports = {
  getTeacherData,
  //getTeacherById
};