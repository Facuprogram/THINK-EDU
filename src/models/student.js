import mongoose from "mongoose"
const studentSchema = new mongoose.Schema({
    
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

//const Student = model('Student', studentSchema);

export default mongoose.model('Student', studentSchema)