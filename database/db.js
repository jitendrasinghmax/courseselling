const mongoose=require('mongoose')
 
const userSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
})
const adminSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
})
const courseSchema=mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    price:{type:Number},
    imageURL:{type:String},
    creatorId:{type:mongoose.Types.ObjectId}
})
const purchaseSchema=mongoose.Schema({
    userId:{type:mongoose.ObjectId},
    courseId:{type:mongoose.Types.ObjectId},
})

module.exports={userModel:mongoose.model('users',userSchema),
                adminModel:mongoose.model('admin',adminSchema),
                courseModel:mongoose.model('course',courseSchema),
                purchaseModel:mongoose.model('purchase',purchaseSchema)};
