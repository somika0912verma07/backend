// const { request } = require('express');
const express=require('express');
const router=express.Router();
const userController=require('../controller/user.controller');


router.get('/',(request,response)=>{
    response.send('working');
})
router.post('/signup',userController.signup);




module.exports=router;