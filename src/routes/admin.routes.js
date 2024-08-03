
import { admin } from "../database/index.database.js"
import adminMiddleware from "../middlewares/admin.middleware.js" 

import { Router } from "express"




Router.post("/signup",(req,res)=>{
    const username = req.body.username
    const password=req.body.password

    admin.create({
        username:username,
        password:password
    })
    .then(function(){
        res.send({
            msg:"user is created successfully"
        })

    })
    .catch(function(err){
        res.error( res.send({
            msg:"user "
        }))
    })

})

Router.post("/courses",adminMiddleware,(req,res)=>{


})


export default Router

