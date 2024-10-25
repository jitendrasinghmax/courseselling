const {Router}=require('express');
const {userModel, purchaseModel, courseModel}=require('../database/db.js')
const signupValidation=require('../validation/signupValidation.js');
const signinValidation = require('../validation/signinValidation.js');
const usersigninAuth=require('../auth/sign/usersigninAuth.js');
const user = require('../auth/varify/user.js');
const userRouter=Router();

userRouter.post('/signup',signupValidation,async(req,resp)=>{
    await userModel.create(req.body)
   resp.json({sucess:true})
})
userRouter.post('/signin',signinValidation,usersigninAuth,(req,resp)=>{
    resp.send("this is usre signin route.");
})

userRouter.get('/details',user,async(req,resp)=>{
    const details=await userModel.findOne({_id:req.body.id});
    resp.json({sucess:true,details});
})
userRouter.post('/purchase',user,async (req,resp)=>{
    const response=await purchaseModel.create({
        userId:req.body.id,
        courseId:req.body.courseId
    })
   resp.json({sucess:true,message:"course purchased sucessfully"});
})

userRouter.get('/mycourse',user,async (req,resp)=>{
    const response=await purchaseModel.find({userId:req.body.id});
    const courses=await courseModel.find({_id:{$in:response.map(x=>x.courseId)}})
        resp.json({sucess:true,courses:courses});
    
})

module.exports={userRouter};

