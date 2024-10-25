//npm packages
const express=require('express');
const cors=require('cors');
require('dotenv').config();

//routing
const { userRouter } = require('./routeing/user');
const { adminRoute } = require('./routeing/admin');
const landingRoute = require('./routeing/landing');
const {ui}=require('./routeing/ui.js')
const { script } = require('./routeing/script.js');

// database
const { mongoose } = require('mongoose');
const styleRouting = require('./routeing/style.js');


const app=express();

mongoose.connect(process.env.MONGODB_URL_KEY).then(()=>{
    console.log("database connected")
})

app.use(cors(["http://localhost:5173/"]));
app.use(express.json())
app.use('/user',userRouter);
app.use('/admin',adminRoute)
app.use('/landing',landingRoute)
app.use('/ui',ui)
app.use('/script',script)
app.use('/style',styleRouting)

app.listen(process.env.PORT || 4000,()=>console.log('server started'));
