import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,

    }
},{timestamps:true})



export const user = mongoose.model("user",userSchema)




