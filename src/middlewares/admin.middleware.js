
// middleware for authorization
import admin from "../database/index.database"
const adminMiddleware = async(req,res,next)=>{
    const username = req.headers.username
    const password = req.headers.password

    admin.findOne({
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

module.exports = adminMiddleware
