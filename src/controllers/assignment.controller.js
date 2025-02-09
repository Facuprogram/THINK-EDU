import Assignment from '../models/assignment.js';
import Student from '../models/student.js'; 


export const createAssignments = async (req, res) => {
    const assignmentsData = req.body; 

    try {
      
        for (const assignment of assignmentsData) {
            const student = await Student.findById(assignment.student);
            if (!student) {
                return res.status(400).json({
                    message: `Student with ID ${assignment.student} not found`
                });
            }
        }

       
        const newAssignments = await Assignment.insertMany(assignmentsData);

        res.status(201).json({
            message: 'Assignments created successfully',
            assignments: newAssignments
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating assignments',
            error: error.message
        });
    }
};


export const editAssignments = async (req, res) => {
    const assignmentsData = req.body; 

    try {
        
        const updatedAssignments = [];
        for (const assignment of assignmentsData) {
            const { id, student, degree, subjects } = assignment;
            
        
            const existingAssignment = await Assignment.findById(id);
            if (!existingAssignment) {
                return res.status(404).json({
                    message: `Assignment with ID ${id} not found`
                });
            }

           
            const studentExists = await Student.findById(student);
            if (!studentExists) {
                return res.status(400).json({
                    message: `Student with ID ${student} not found`
                });
            }

            
            existingAssignment.student = student || existingAssignment.student;
            existingAssignment.degree = degree || existingAssignment.degree;
            existingAssignment.subjects = subjects || existingAssignment.subjects;

            
            const updatedAssignment = await existingAssignment.save();
            updatedAssignments.push(updatedAssignment);
        }

        res.status(200).json({
            message: 'Assignments updated successfully',
            assignments: updatedAssignments
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating assignments',
            error: error.message
        });
    }
};
