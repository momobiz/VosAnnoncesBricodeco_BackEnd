const Users=require("../Models/Users.js"); 
const bcrypt=require("bcrypt");
const gravatar=require("gravatar");
const jwt=require("jsonwebtoken"); 
const config=require("config"); 



exports.getUsers=async(req, res)=>{
    
    try{
       const users= await Users.find();
       res.status(200).json(users);

    }catch(error){
        res.status(404).json({message:message.error});
    }

}

exports.createUsers=async(req, res)=>{
    const {userName, password,phone, city, email, professionnal }=req.body; 
    const searchUser=await Users.findOne({email});
    if(searchUser) return res.status(404).json('email is already used');


    
   
    try{
        const avatar=await gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        });
        const newUser=new Users({userName, password,phone, city, email, avatar, professionnal}); 
      
        
        const salt=await bcrypt.genSalt(10);
        newUser.password=await bcrypt.hash(password, salt);

       
        await newUser.save();
        // creation d un token 
        const payload={
           userName:newUser.userName,
           id:newUser.id
        };
            
        
       const  token=jwt.sign(payload,
             config.get("SECRET"), 
            { expiresIn:36000}          
             )
        //
        res.status(200).json(token)

    }catch(err){
        res.status(404).json("this user has been already exist");
    }

}
exports.getOneUser =async(req, res)=>{
   

    
    try{
        const user=await Users.findById(req.id);
        if(!user) return res.status(401).json("invalid email");
        res.status(200).json(user);

    }catch(error){
        return res.status(401).json({message:error.message});

    }

   

}
