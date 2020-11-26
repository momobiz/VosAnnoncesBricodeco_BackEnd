const Users=require("../Models/Users.js"); 
const bcrypt=require("bcrypt");



exports.getUsers=async(req, res)=>{
    
    try{
       const users= await Users.find();
       res.status(200).json(users);

    }catch(error){
        res.status(404).json({message:message.error});
    }

}
exports.createUsers=async(req, res)=>{
    const newUser=new Users(req.body);
    
    const hash=await bcrypt.hash(req.body.password, 10);
    newUser.password=hash;
    
    
    
    try{
        const hash=await bcrypt.hash(req.body.password, 10);
        newUser.password=hash;

        await newUser.save(newUser);
        res.status(200).json({message:"user created"});
        
    }catch(error){
        console.log(error)
        res.status(500).json({errors:error})
    }
}