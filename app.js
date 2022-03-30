const express =require('express');
const bodyParser=require('body-parser');
const path=require('path');
const userRouter=require("./router/user.router");
const app=express();
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb+srv://somikaverma:somikaverma12@mymongodb.q7idm.mongodb.net/backend?retryWrites=true&w=majority")
.then(()=>{
    console.log("Database Connect")
})
.catch(err=>{
    console.log(err);
})


app.use(express.static(path.join(__dirname,"public")));


app.use('/',userRouter);

app.listen(process.env.PORT||3000,()=>{
    console.log("Server is runu");
})