const express=require('express');
const router=express.Router();
const userController=require('../controller/user.controller');


router.get('/',(request,response)=>{
    response.send('working');
})
router.post('/signup',userController.signup);
router.post('/signin',userController.signin);
router.get('/user-list',userController.userList)




module.exports=router;