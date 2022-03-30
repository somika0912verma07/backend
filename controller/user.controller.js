// const { request } = require("express");
const { request, response } = require('express');
const User = require('../model/user.model');

exports.signup = (request, response, next) => {
    console.log("before")
    console.log(request.body);
    console.log("after")
     const user=new User();
    user.name=request.body.name;
     user.email=request.body.email;
     user.password=request.body.password;
0
    // user.name="some";
    //  user.email="some@gmail.com";
    //  user.password="pss123";

     let name1 = request.body.name;
     console.log(name1)

    user.save()
        .then(result => {
            console.log('loggin success');
            console.log(result);
            return response.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json(err)
        }
        )



};
exports.signin=(request,response,next)=>{
    console.log(request.body)
    User.findOne({email:request.body.email,password:request.body.password})
    .then(
        result=>{
            if(result)
            return response.status(201).json(result)
            else return response.status(204).json({message:"user not found"})
        }
    )
    .catch(err=>{
        console.log(err)
        return response.status(500).json({message:"OOps!Something Went Wrong"})
    })
}



exports.userList=(request,response,next)=>{
    console.log(request.body)
    User.find()
    .then(
        result=>{
            if(result)
            return response.status(201).json(result)
            else return response.status(204).json({message:"user not found"})
        }
    )
    .catch(err=>{
        console.log(err)
        return response.status(500).json({message:"OOps!Something Went Wrong"})
    })
}
