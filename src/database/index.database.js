import mongoose from "mongoose";


 mongoose.connect(`mongodb+srv://mongo:PP83wdGuDhMSxRoa@cluster1.xp5ghbi.mongodb.net/`)


const adminSchema = new mongoose.Schema({
    username:String,
    password:String,

})

const userSchema = new mongoose.Schema({
    username:String,
    password:String,

    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course'
    }]
})



export const  admin = mongoose.model("admin",adminSchema)  
export const  user = mongoose.model("user",userSchema)  
