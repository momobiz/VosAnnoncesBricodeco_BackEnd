const Posts=require("../Models/Posts.js"); 


exports.getPosts=async(req, res)=>{
    try{

        const posts=await Posts.find(); 
        res.status(200).json(posts);


    }catch(error){
        res.status(404).json({message:message.error});

    }

}
exports.createPosts=async(req, res)=>{
   const newPost=new Posts(req.body); 
   try{
       await newPost.save(); 
       res.status(201).json(newPost);

   }catch(error){
       res.status(404).json({message:error.message})
   }

}
exports.updatePosts=async(req, res)=>{
        
    
try{
   const updatedPost=await Posts.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
    
    res.status(200).json(updatedPost);
    

}catch(error){
    res.status(404).json({message:message.error});
}

}