const config=require('config');
const mongoose=require('mongoose');

const url=config.get("MERNAPP_URL"); 

const connectDB=()=>{
    mongoose.connect(url,{ useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,  }, ()=>{

        try{

            console.log("succes to connect to bdd");
    
        }catch(error){
            console.log(message.error)
        }
    })
   
}
    
module.exports=connectDB;