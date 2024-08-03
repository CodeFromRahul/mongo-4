
// middleware for authorization
import {user} from "../database/index.database.js"



const userMiddleware = async(req,res,next)=>{
    const username = req.headers.username
    const password = req.headers.password

    user.findOne({
        username:username
    })
    .then(function(value){
        if(value){
            next()
        }
        else{
            res.status(403).json({
                msg:"User does not exist"
            })
        }
    }
        
    )




    


next()


}

module.exports = userMiddleware
