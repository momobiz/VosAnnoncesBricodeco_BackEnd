const mongoose=require("mongoose");


const postsSchema=new mongoose.Schema({
    idUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    userName:{
        type:String

    }, 
    avatar:{
        type:String

    },
    comments:[
      {  idUser:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        },
        text:{
            type:String,
            
        },
        userName:String,
        date:{type:Date,
             default:new Date()
            
            }
    } 

 
    ], 


    title:{
        type:String,
       // required:true
    }, 
    category:{
        type:String,
       // required:true
    },
    photo:String,
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