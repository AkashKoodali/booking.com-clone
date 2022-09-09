import express from "express";
import dotenv from "dotenv";
import DbConnection from "./config/databaseConnection.js";

dotenv.config();

const app = express();

DbConnection();

const PORT = 8800;

app.use(express.json());

app.listen( PORT, ()=> {
    console.log('Connected to backent');

});
