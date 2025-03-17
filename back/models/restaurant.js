import mongoose from 'mongoose';
const restauSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    restauName:{
        type:String,
        required:true,
        
    },
    
    city:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    timings:{
        type:Number,
        required:true,
    },
    cuisines:[{
        type:String,
        required:true,
    }],
    menus:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Menu",
    }]
    
},{timestamps:true});
export const Restaurant=mongoose.model("Restaurant",restauSchema);