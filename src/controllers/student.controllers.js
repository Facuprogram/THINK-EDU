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

  try {
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};



 export const  getStudent = async (req, res) => {
  try {
    const student = await Student.find({}); 
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
}

 export const getStudentById = (req, res) => {
  try {
    const student =  Student.findById(req.params.id); 
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json(student); 
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
}

  export const deleteStudent = (req, res) => {

     try {
     const studentDel =  Student.findByIdAndRemove(req.params.id);
      
     if (!studentDel) return res.status(400).json({ message: "Student not found" });

     res.json({ message: "Alumno eliminado correctamente" });
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
  };
