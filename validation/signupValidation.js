const zod=require('zod');

module.exports=(req,resp,next)=>{
    const {firstname,lastname,email,password}=req.body;
    const userSchema=zod.object({
        firstname:zod.string().max(100),
        lastname:zod.string(),
        email:zod.string().email(),
        password:zod.string().min(6).max(8).regex(/[a-zA-Z]/,"password must contain alphabets").
        regex(/[!@#$%^&*(),.?":{}|<>]/,"password must contain special character")
    })
    try{
        userSchema.parse(req.body);
        next();
    }catch(e){
        console.log(e.issues.map((error)=>error.message));
        resp.send("invalid input")
    }
}
