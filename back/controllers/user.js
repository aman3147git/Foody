import { User } from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const Register=async(req,res)=>{
    const {fullname,email,password,contact}=req.body;
    try{
    if(!fullname|| !email|| !password || !contact){
        return res.status(401).json({
            message:"invalid data",
            success:false
        })
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(401).json({
            message:"Email has been already taken.",
            success:false
        })
    }
    const hashedpass=bcryptjs.hashSync(password,10);
    await User.create({
        fullname,email,
        password:hashedpass,
        contact
    });
    return res.status(200).json({
        message:"Account created",
        success:true
    })
}catch(error){
    console.log(error);
}

}

export const Login=async(req,res)=>{
    const {email,password}=req.body;
    try{
    if(!email|| !password){
        return res.status(401).json({
            message:"invalid data",
            success:false
        })
    }
    const user=await User.findOne({email});
    if(!user){
        return res.status(401).json({
            message:"Never loggedin before",
            success:false
        })
    }
    const isMatch=bcryptjs.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({
            message:"Incorrect password",
            success:false
        }) 
    }
    const token=jwt.sign({id:user._id,email:user.email},process.env.SECRET_KEY);

    return res.status(200).cookie("token",token,{httpOnly:true}).json({
        message:`Welcome back ${user.fullname}`,
        user,
        success:true
    })
}catch(error){
    console.log(error);
}
}

export const Logout=(req,res)=>{
    return res.status(200).clearCookie("token").json({
        message:"User logged out successfully",
        success:true
    })
}

