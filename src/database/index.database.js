import mongoose, { mongo } from "mongoose";
import { required } from "nodemon/lib/config";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,

    }
},{timestamps:true})