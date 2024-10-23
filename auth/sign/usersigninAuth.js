const mongoose=require('mongoose');
require('dotenv').config();

const {userModel}=require('../../database/db.js');
const jwt=require('jsonwebtoken')
module.exports=async(req,resp,next)=>{
    const document=await userModel.findOne(req.body);
    if(document){
        const token=jwt.sign({
           id:document._id
        },process.env.SECRET_KEY);
        resp.json({isValid:true,token})
    }else{
        resp.json({isValid:false})
    }
}

