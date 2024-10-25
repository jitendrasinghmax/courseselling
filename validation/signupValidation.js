const zod=require('zod');

module.exports=(req,resp,next)=>{
    console.log(req.body)
    const {firstname,lastname,email,password}=req.body;
    const userSchema=zod.object({
        firstname:zod.string().max(100).min(1,"input first name"),
        lastname:zod.string().min(1,"input last name"),
        email:zod.string("input email").email("input valid email"),
        password:zod.string().min(6,"password must be at least 6 char").max(8).regex(/[a-zA-Z]/,"password must contain alphabets").
        regex(/[!@#$%^&*(),.?":{}|<>]/,"password must contain special character")
    })
    try{
        userSchema.parse(req.body);
        next();
    }catch(e){
        resp.json({sucess:false,message:e.issues.map((error)=>error.message)})
    }
}
