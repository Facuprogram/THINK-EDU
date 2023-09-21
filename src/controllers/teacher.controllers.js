import Teacher from "../models/teacher.js";

export const createTeacher = (req, res) => {
  const { name, lastName, id, nameInstitution, address } = req.body;
  const newTeacher = new Teacher({
    name,
    lastName,
    id,
    nameInstitution,
    address,
  })

  try {
    const savedTeacher =  newTeacher.save();
    const token = createAccesToken({id: teacherSaved._id});
    res.cookie('token', token)
    res.json(savedTeacher);
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};




export const getTeacherData = async (req, res) => {
 
  try {
    const teacher = await Teacher.findOne({ name: "/" });

    if (!teacher) return res.status(400).json({ message: "User not found" });

    res.json({
      name: teacher.name,
      lastName: teacher.lastName,
      id: teacher.id,
      nameInstitution: teacher.nameInstitution,
      address: teacher.address,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};
