const express=require('express');
require('dotenv').config();
const { userRouter } = require('./routeing/user');
const { adminRoute } = require('./routeing/admin');
const { mongoose } = require('mongoose');
const landingRoute = require('./routeing/landing');

const app=express();

mongoose.connect(process.env.MONGODB_URL_KEY).then(()=>{
    console.log("database connected")
})

app.use(express.json())
app.use('/user',userRouter);
app.use('/admin',adminRoute)
app.use('/landing',landingRoute)

app.listen(process.env.PORT || 4000,()=>console.log('server started'));
