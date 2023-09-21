import mongoose from "mongoose"
const userSchema = mongoose.Schema({

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
    role: String,
    active:{
        type: Boolean,
        default: false,
    }

})

export default mongoose.model('User', userSchema)

