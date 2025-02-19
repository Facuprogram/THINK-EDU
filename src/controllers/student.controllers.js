import express from 'express';
import Student from '../models/student.js';
import Assignment from '../models/assignment.js';

const router = express.Router();

export const createStudent = async (req, res) => {
    const { name, lastName, degree, paymentState, telephone, address, age } = req.body;

    try {
        const newStudent = new Student({
            name,
            lastName,
            degree,         
            paymentState,
            telephone,
            address,
            age
        });

        await newStudent.save();

        res.status(201).json({
            message: 'Student created successfully',
            student: newStudent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating student',
            error: error.message
        });
    }
};

export const editStudent = async (req, res) => {
    const { name, lastName, degree, paymentState, telephone, address, age, assignments } = req.body;

    try {
        const student = await Student.findById(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        // Update the student details
        student.name = name || student.name;
        student.lastName = lastName || student.lastName;
        student.degree = degree || student.degree;
        student.paymentState = paymentState || student.paymentState;
        student.telephone = telephone || student.telephone;
        student.address = address || student.address;
        student.age = age || student.age;
        student.assignments = assignments || []

        await student.save();

        res.status(200).json({
            message: 'Student updated successfully',
            student
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating student',
            error: error.message
        });
    }
};

export const changeStudentState = async (req, res) => {
    try {
        const { estado } = req.body
        const student = await Student.findById(req.params.id);

        if (typeof estado !== 'boolean') {
            return res.status(400).json({
                message: 'Estado is needed'
            });
        }
        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        student.active = estado;

        await student.save();

        await Assignment.updateMany(
            { student: student._id },
            { $set: { active: estado } }
        );

        res.status(200).json({
            message: 'Student deactivated successfully',
            student
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error deactivating student',
            error: error.message
        });
    }
};


export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('assignments');

        if (!student) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error retrieving student',
            error: error.message
        });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
            .populate({
                path: 'assignments',
            });

        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error retrieving students',
            error: error.message
        });
    }
};


export default router;
