import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const administrativeSchema = new Schema({
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

const Administrative = model('Administrative', administrativeSchema);

export default Administrative;