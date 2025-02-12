import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    degree: { type: Number, required: true }, // Current academic year
    paymentState: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    telephone: { type: Number, required: false },
    address: { type: String, required: true },
    age: { type: Number, required: false },
    assignments: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }], // Array of ObjectIds
        default: [] // ✅ Correct default for an array
    }
});


export default mongoose.model("Student", studentSchema);
