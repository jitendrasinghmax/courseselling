const {Router}=require('express');
const path=require('path');

const ui=Router();

ui.get('/',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/index.html"));
})
ui.get('/signup',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/signup/index.html"))
})
ui.get('/signin',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/signin/index.html"))
})

module.exports={ui};