const express=require('express');
const { userRouter } = require('./routeing/user');
const { adminRoute } = require('./routeing/admin');
const { mongoose } = require('mongoose');
const landingRoute = require('./routeing/landing');

const app=express();

mongoose.connect("mongodb+srv://js8322870:jiten.max@cluster0.aio6u.mongodb.net/course").then(()=>{
    console.log("database connected")
})

app.use(express.json())
app.use('/user',userRouter);
app.use('/admin',adminRoute)
app.use('/landing',landingRoute)

app.listen(process.env.PORT || 4000,()=>console.log('server started'));
