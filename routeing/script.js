const {Router}=require('express');
const path=require('path');

const script=Router();

script.get('/',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/script.js"));
})
script.get('/signup',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/signup/script.js"));
})
script.get('/signin',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/signin/script.js"));
})

module.exports={script};