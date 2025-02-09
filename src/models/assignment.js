import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    degree: {
        type: Number, // The year this assignment belongs to
        required: true
    },
    subjects: {
        Mathematics: { type: Number, default: 0 },
        LanguageAndLiterature: { type: Number, default: 0 },
        Biology: { type: Number, default: 0 },
        Physics: { type: Number, default: 0 },
        Chemistry: { type: Number, default: 0 },
        Economics: { type: Number, default: 0 },
        Geography: { type: Number, default: 0 },
        History: { type: Number, default: 0 },
        PhysicalEducation: { type: Number, default: 0 }
    }
});

// Ensure a student can't have two assignments for the same degree
assignmentSchema.index({ student: 1, degree: 1 }, { unique: true });

export default mongoose.model("Assignment", assignmentSchema);
