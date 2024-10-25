const {Router}=require('express');
const path=require('path');
const styleRouting=Router();

styleRouting.get('/',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"../frontend/style.css"))
})

module.exports=styleRouting;