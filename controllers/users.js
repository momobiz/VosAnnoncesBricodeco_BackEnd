const Users=require("../Models/Users.js"); 



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
    
    try{
        await newUser.save(newUser);
        res.status(200).json({message:"user created"});

    }catch(error){
        console.log(error)
        res.status(500).json({errors:error})
    }
}