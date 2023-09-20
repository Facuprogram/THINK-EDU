import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost/mrendb");
        console.log(">>> DB is conectado");
    }   catch (error) {
        console.log(error);
    }

}; 