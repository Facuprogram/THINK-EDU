import mongoose from "mongoose"
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    
    password: {
        type: String,
        required: true
    }, 
    estate: {
        type: Boolean,
        default: false,
    }, 
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    }, 
        
    },
    {
        timestamps: true
    })

export default mongoose.model('User', userSchema)


