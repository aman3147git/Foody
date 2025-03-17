import express from "express";
import dotenv from 'dotenv';
import db from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js';

import cors from "cors";



dotenv.config();



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



db();
const corsopt={
    origin:process.env.FRONTEND_URL,
    credentials:true
}
app.use(cors(corsopt));

app.use('/api/user',userRoute);


app.listen(process.env.PORT,()=>{
    console.log("Server running on port: 8080");
})
