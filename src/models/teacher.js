import mongoose from "mongoose";
const teacherSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    currentDay: {
        type: Date,
        default: Date.now
    },
    contact: [{
        telephone: Number,
        mail: String
    }],
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nameInstitution: {
        type: String,
        required: true
    },
    address: String
});

//const Teacher = model('Teacher', teacherSchema);

export default Teacher; 