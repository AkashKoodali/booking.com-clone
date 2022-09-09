import express from "express";
import dotenv from "dotenv";

import DbConnection from "./config/databaseConnection.js";

import authRouter from "./routes/auth.js";
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();

DbConnection();

const PORT = 8800;

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello")
});

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/rooms", roomsRouter);
app.use("/hotels", hotelsRouter);

app.listen( PORT, ()=> {
    console.log('Connected to backent');

});
