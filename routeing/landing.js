const {Router}=require('express');
const {courseModel}=require('../database/db.js')

const landingRoute=Router();

landingRoute.get('/',async (req,resp)=>{
    const courses=await courseModel.find({});
    if(courses){
        resp.json({sucess:true,courses});
    }else{
        resp.json({sucess:false,courses});
    }
})
module.exports=landingRoute;