import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    estate: { type: Boolean, default: false },

    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
}, 
{ timestamps: true });

export default mongoose.model("User", userSchema);