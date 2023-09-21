import Teacher from "../models/teacher.js";

export const createTeacher = (req, res) => {
  const { name, lastName, currentDay, contact, id, nameInstitution, address } = req.body;
  const newTeacher = new Teacher({
    name,
    lastName,
    currentDay,
    contact,
    id,
    nameInstitution,
    address,
  })

  try {
    const savedTeacher =  newTeacher.save();
    res.json(savedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};




export const getTeacherData = async (req, res) => {
 
  try {
    const teacher = await Teacher.findOne({ name: "Facundo" });

    if (!teacher) return res.status(400).json({ message: "User not found" });

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
  
};
