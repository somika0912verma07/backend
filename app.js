const express =require('express');
const bodyParser=require('body-parser');
const path=require('path');

const userRouter=require("./router/user.router");
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://somikaverma:somikaverma12@mymongodb.q7idm.mongodb.net/backend?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database Connect")
})
.catch(err=>{
    console.log(err);
})

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));


app.use(userRouter);

app.listen(3000,()=>{
    console.log("Server is runu");
})