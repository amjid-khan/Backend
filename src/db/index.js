import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\nMongoDB connected ✅ at host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("❌ MONGODB connection error:", error);
    }
};

export default connectDB;   