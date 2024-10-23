const {Router}=require('express');
const {adminModel, courseModel}=require('../database/db.js')
const signupValidation=require('../validation/signupValidation.js');
const signinValidation = require('../validation/signinValidation.js');
const adminsigninAuth=require('../auth/sign/adminsigninAuth.js');
const admin = require('../auth/varify/admin.js');


const adminRoute=Router();

adminRoute.post('/signup',signupValidation,async(req,resp)=>{
    await adminModel.create(req.body)
   resp.json({sucess:true})
})
adminRoute.post('/signin',signinValidation,adminsigninAuth,(req,resp)=>{
    resp.send("this is usre signin route.");
})

adminRoute.put('/createcourse',admin,async (req,resp)=>{
    await courseModel.create({
            title:req.body.title,
            desc:req.body.desc,
            price:req.body.price,
            imageURL:req.body.imgUrl,
            creatorId:req.body.id
    })
    resp.json({sucess:true,
        message:"course created sucessfully."
    })
})
adminRoute.put('/course',admin,async (req,resp)=>{
    console.log(req.body)
    const response=await courseModel.updateOne({_id:req.body.courseId,creatorId:req.body.id},{
        title:req.body.title,
        desc:req.body.desc,
        price:req.body.price,
        imageURL:req.body.imgUrl,
})
if(response.matchedCount>0){
    resp.json({sucess:true,
        message:"course updated sucessfully."
    })
}else{
    resp.json({sucess:false,
        message:"invalid action"
    })
}
   
})
adminRoute.get('/mycourse',admin,async(req,resp)=>{
    const courses=await courseModel.find({creatorId:req.body.id});
    resp.json({courses:courses});
})

module.exports={adminRoute}