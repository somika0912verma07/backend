const { request } = require("express");
const User=require('../model/user.model');

exports.signup=(request,response,next)=>{
    console.log(request.body)
    // const user=new User();
    // user.name=request.body.name;
    // user.email=request.body.email;
    // user.password=request.body.password;
    user.create(req.body)
    .then(result=>{
        return response.status(201).json(result);
    })
    .catch(
        err=>{
            console.log(err);
            return response.status(500).json({message:"OOps!Somwthing Went Wrong"})
        }
    )

    
    
};