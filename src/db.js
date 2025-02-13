import mongoose from "mongoose";
import student from "./models/student.js";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION);
        console.log(">>> DB is conectado");
        await student.syncIndexes();
    }   catch (error) {
        console.log(error);
    }

}; 