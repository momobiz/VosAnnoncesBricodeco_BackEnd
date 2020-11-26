const mongoose=require("mongoose");


const postsSchema=new mongoose.Schema({
    title:{
        type:String,
       // required:true
    }, 
    category:{
        type:String,
       // required:true
    },
    photo:[String],
    description:String,
    price:Number,
    publishedAt:{
        type:Date,
        default:new Date()
    },
    duration:Number,
    phone:{
        type:Number,
        //required:true
    },
    city:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model('Posts', postsSchema);