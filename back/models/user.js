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
    isAdmin:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true});
export const User=mongoose.model("User",userSchema);