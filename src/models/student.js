import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    degree: {
        type: Number, // Current academic year
        required: true
    },
    paymentState: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    telephone: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    assignments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment",
            unique: true // Prevents duplicate assignments for the same student-degree
        }
    ]
});

export default mongoose.model("Student", studentSchema);
