import mongoose from "mongoose";
import express from "express"
import { DB_NAME } from "../constants.js";

import dotenv from "dotenv";
dotenv.config();

const app = express()

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\nMongoDB connected ✅ at host: ${connectionInstance.connection.host}`);
        app.listen(process.env.PORT, () => {
            console.log(`server is ready on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("❌ MONGODB connection error:", error);
    }
};

export default connectDB;   