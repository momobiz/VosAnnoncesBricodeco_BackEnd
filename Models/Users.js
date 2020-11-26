const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    userName:{
        type:String, 
        unique:true
       
    }, 
    password:{
        type:String,
      
     
        
    },
    phone:{
        type:Number,
        unique:true
    },
    professionnal: Boolean,
    city:String, 
    email:{
        type:String,
        unique:true
       
        }

       
    }


)



module.exports=mongoose.model('Users',userSchema ); 