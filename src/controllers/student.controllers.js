 import Student from "../models/student.js";


 export const createStudent = async (req, res) => {
  const {nameComplete, degree, numberId, quotaDay, active, telephone, address, age} = req.body;
  const newStudent = new Student ({
    nameComplete,
    degree,
    numberId,
    quotaDay,
    active,
    telephone,
    address,
    age,
  });
};

// Controlador para obtener todos los alumnos
 export const  getStudent = async (req, res) => {
  try {
    const student = await student.find(); // Obtiene todos los alumnos desde la base de datos
    res.json(student); // Responde con la lista de alumnos
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
}

// Controlador para obtener un alumno por su ID
 export const getStudentById = (req, res) => {
  try {
    const student =  student.findById(req.params.id); // Busca un alumno por su ID
    if (!student) return res.status(400).json({ message: "Student not found" });

    res.json(student); // Responde con los detalles del alumno encontrado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
}

  export const deleteStudent = (req, res) => {
  } 
     try {
     const studentDel = await Student.findByIdAndRemove(req.params.id);
      
     if (!studentDel) return res.status(400).json({ message: "Student not found" });

     res.json({ message: "Alumno eliminado correctamente" });
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
   
 {

};
