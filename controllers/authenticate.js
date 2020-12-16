const Users=require("../Models/Users.js");
const jwt=require("jsonwebtoken");
const config=require("config");
const bcrypt=require("bcrypt");

exports.authenticate= async(req, res)=>{
    const {email, password}=req.body;
 
  
    try{
        const user= await Users.findOne({email:email
                                     });
        if(!user) return res.status(404).json("verify your email")
        const payload={
         
            id:user.id
         };

         const isMatch=await bcrypt.compare(password, user.password);
         if(!isMatch){
             return res.status(401).json("Ivalid password");
         }
             
         
        const  token=jwt.sign(payload,
              config.get("SECRET"), 
             { expiresIn:36000}          
              )
              
       
              res.json(token);

    


    }catch(error){
        return res.status(401).json('server error');

    }

}