import express from "express"
import corse from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(corse({
    origin: process.env.CORSE_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express())
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from "./routes/user.routes.js"

// route declaration
app.use("/api/v1/users", userRouter)



export { app }
