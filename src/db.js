import mongoose from "mongoose";
import student from "./models/student.js";

export const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost/mrendb");
        console.log(">>> DB is conectado");
        await student.syncIndexes();
    }   catch (error) {
        console.log(error);
    }

}; 