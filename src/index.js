import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config();


connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("error", err)
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening on port ${process.env.PORT}`)
        })
    }).catch((err) => {
        console.log("Mongodb connection failed !!!", err);
    });