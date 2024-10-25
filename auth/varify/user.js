const jwt=require('jsonwebtoken');
require('dotenv').config();

module.exports=async(req,resp,next)=>{
    console.log(req.headers.token)
    const token=req.headers.token;
    const decode=jwt.verify(token,process.env.SECRET_KEY);
    if(decode){
        req.body.id=decode.id;
        next();
    }else{
        resp.json({sucess:true,message:"user are not logged in."})
    }
}