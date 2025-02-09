import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    estate: { type: Boolean, default: false },

    // Role (Can be "teacher", "student", etc.)
/*     role: {
        type: String,
        enum: ["teacher", "student"],
        required: true
    }, */

    // If the user is a teacher, link to the Teacher collection
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
}, 
{ timestamps: true });

export default mongoose.model("User", userSchema);
