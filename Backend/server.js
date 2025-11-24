import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import morgan from "morgan";
import resumeRoutes from "./routes/resumeRoutes.js";
dotenv.config();
connectDB();

const app = express();      // <-- STEP 1 (VERY IMPORTANT)

app.use(morgan("dev"));     // <-- STEP 2
app.use(express.json());    // <-- STEP 3
app.use(cors());            // <-- STEP 4`
console.log("Auth Routes Loaded") 

app.use("/api/auth", authRoutes);   // <-- STEP 5
app.use("/api/resumes", resumeRoutes);
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
