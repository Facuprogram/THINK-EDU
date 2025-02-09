import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    currentDay: { type: Date, default: Date.now },
    telefono: { type: String, required: true },
    nameInstitution: { type: String, required: true },
    address: String
});

export default mongoose.model("Teacher", teacherSchema);
