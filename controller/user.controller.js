// const { request } = require("express");
const User = require('../model/user.model');

exports.signup = (request, response, next) => {
    console.log(request.body);
     const user=new User();
    // user.name=request.body.name;
    //  user.email=request.body.email;
    //  user.password=request.body.password;

    user.name="some";
     user.email="some@gmail.com";
     user.password="pss123";

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