import express from "express";
import dotenv from "dotenv";

import DbConnection from "./config/databaseConnection.js";

import authRouter from "./routes/auth.js";
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import usersRouter from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from 'cors'; 

dotenv.config();

const app = express();

DbConnection();

const PORT = 8800;

app.get("/", (req,res)=>{
    res.send("hello")
});

//middilewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/rooms", roomsRouter);
app.use("/hotels", hotelsRouter);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Somthing went wrong..!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen( PORT, ()=> {
    console.log('Connected to backend');
});
