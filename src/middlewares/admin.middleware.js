
// middleware for authorization
import {admin} from "../database/index.database.js"


const adminMiddleware = async(req,res,next)=>{
    const username = await req.headers.username
    const password = await req.headers.password

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
export default adminMiddleware

