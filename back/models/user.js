import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:"UPdate your address"
    },
    city:{
        type:String,
        default:"UPdate your city"
    },
    country:{
        type:String,
        default:"UPdate your country"
    },
    profilePicture:{
        type:String,
        default:""
    },
    admin:{
        type:Boolean,
        default:false
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordTokenExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
    
},{timestamps:true});
export const User=mongoose.model("User",userSchema);