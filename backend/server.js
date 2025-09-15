const express = require("express");
const dotenv =  require("dotenv").config();
const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authRoute")

const app = express();

app.use("/api/auth", authRoutes );

app.use(express.json())

app.listen(8000, () => {
  console.log("app running");
//   connectDB()
});
