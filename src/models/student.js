import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const studentSchema = new Schema({
    nameComplete: {
        type: String,
        required: true
    },
    degree: {
        type: Number,
        required: true
    },
    numberId: {
        type: Number,
        required: true,
        unique: true
    },
    quotaDay: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    telephone: Number,
    address: String,
    age: Number
});

const Student = model('Student', studentSchema);

export default Student;