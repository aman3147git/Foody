import { User } from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { generateVerificationCode } from "../utils/verificationCode.js";
import { sendPasswordResetEmail, sendResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";
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

    const verificationToken=generateVerificationCode();

    user=await User.create({
        fullname,email,
        password:hashedpass,
        contact,
        verificationToken,
        verificationTokenExpiresAt:Date.now()*24*60*60*1000
    });
    const token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'1d'});
    res.cookie("token",token,{httpOnly:true});


    await sendVerificationEmail(email,verificationToken);
    const userWithoutpassword=await User.findOne({email}).select("-password")
    return res.status(200).json({
        message:"Account created",
        success:true,
        user:userWithoutpassword
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
        return res.status(400).json({
            message:"Incorrect password",
            success:false
        }) 
    }
    const token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'1d'});
    res.cookie("token",token,{httpOnly:true});
    user.lastLogin=new Date();
    await user.save();
    

    const userWithoutpassword=await User.findOne({email}).select("-password")
    return res.status(200).json({
        message:`Welcome back ${user.fullname}`,
        user:userWithoutpassword,
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

export const verifyEmail=async(req,res)=>{
    try{
    const {verificationCode}=req.body;
    const user=await User.findOne({verificationToken:verificationCode,
        verificationTokenExpiresAt:{$gt:Date.now()}
    }).select("-password");
    if(!user){
        return res.status(400).json({
            message:"inavalid or expired verification token",
            success:false
        })
    }
    user.isVerified=true;
    user.verificationToken=undefined;
    user.verificationTokenExpiresAt=undefined;
    await user.save();
    await sendWelcomeEmail(user.email,user.fullname);

    return res.status(200).json({
        message:"email verified successfully!",
        success:true,
        user
    })
    }catch(error){
    console.log(error);
    }
}

export const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      
      const resetToken = crypto.randomBytes(40).toString("hex");
      const resetTokenExpiresAt=new Date(Date.now()*1*60*60*1000);
      user.resetPasswordToken=resetToken;
      user.resetPasswordTokenExpiresAt=resetTokenExpiresAt;  
      await user.save();
      await sendPasswordResetEmail(user.email,`${process.env.FRONTEND_URL}/resetPassword/${resetToken}`);
      
      return res.status(200).json({
        success:true,
        message: "Reset link sent to email"
      });
    } catch (error) {
      console.error(error);
    }
  };


  export const resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
      
      const user = await User.findOne({ resetPasswordToken:token, resetPasswordTokenExpiresAt:{$gt:Date.now()}});
      if (!user) return res.status(400).json({
        success:false,
        message: "invalid or expired reset token" 
      });
  
      const hashedPass=bcryptjs.hashSync(newPassword,10);
      user.password=hashedPass;
      user.resetPasswordToken=undefined;
      user.resetPasswordTokenExpiresAt=undefined;  
      await user.save();
     
      await sendResetSuccessEmail(user.email);
      return res.status(200).json({
        success:true,
        message: "Password reset Successfully !"
      });
    } catch (error) {
      console.error(error);
    }
  };

  export const checkAuth = async (req, res) => {
    try {
      const  userId  = req.id;
      
      
      const user = await User.findById(userId).select("-password");
      if (!user) return res.status(404).json({
        success:false,
        message: "user not found" 
      });
  
      
      return res.status(200).json({
        success:true,
        user,
        
      });
    } catch (error) {
      console.error(error);
    }
  };

  export const updateProfile = async (req, res) => {
    try {
      const  userId  = req.id;
      const { fullname,email,address,city,country,profilePictue } = req.body;
      let cloudResponse;
      cloudResponse=await cloudinary.uploader.upload(profilePictue);
      const updatedData={fullname,email,address,city,country,profilePictue};
      const user=await User.findByIdAndUpdate(userId,updatedData,{new:true}).select("-password");

    
      
      return res.status(200).json({
        success:true,
        user,
        message:"Profile updated successfully"
      });
    } catch (error) {
      console.error(error);
    }
  };
  