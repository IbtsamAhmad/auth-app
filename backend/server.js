import express from "express"
import {connectDB} from "./db/connectDB.js"
import authRoutes from "./routes/authRoute.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())


app.use('/api/auth', authRoutes)

app.listen(3000,() =>{
console.log("app running")
 connectDB()
})


