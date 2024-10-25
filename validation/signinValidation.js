const zod=require('zod');

module.exports=(req,resp,next)=>{
    const {firstname,lastname,email,password}=req.body;
    const userSchema=zod.object({
        email:zod.string().email("invalid email"),
        password:zod.string().min(6,"*password must contain").max(8).regex(/[a-zA-Z]/,"password must contain alphabets").
        regex(/[!@#$%^&*(),.?":{}|<>]/,"password must contain special character")
    })
    try{
        userSchema.parse(req.body);
        next();
    }catch(e){
        resp.json({sucess:false,message:e.issues.map((error)=>error.message)})
    }
}
