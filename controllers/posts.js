const Posts=require("../Models/Posts.js"); 

// affichage de tous les annonces du plus récent au moins récent
exports.getPosts=async(req, res)=>{
    try{

        const posts=await Posts.find().sort({publishedAt:'desc'}); 
        res.status(200).json(posts);


    }catch(error){
        res.status(404).json({message:message.error});

    }

}
// creation d une annonce 
exports.createPosts=async(req, res)=>{
   const newPost=new Posts(req.body); 
   try{
       await newPost.save(); 
       res.status(201).json(newPost);

   }catch(error){
       res.status(404).json({message:error.message})
   }

}
// mise a  jour d une annonce 
exports.updatePosts=async(req, res)=>{
        
    
try{
   const updatedPost=await Posts.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
    
    res.status(200).json(updatedPost);
    

}catch(error){
    res.status(404).json({message:message.error});
}

}
// supprimer une annonce par id 
exports.deletePosts=async(req, res)=>{
    try{
        await Posts.findOneAndDelete({_id:req.params.id});
        res.status(200).json(`post  with id ${req.params.id} has been  deleted`)

    }catch(error){
        res.status(404).json({message:message.error}); 

    }

}
// afficher les annonces par catégory
exports.getPostsbyCategory=async(req, res)=>{
    try{
        const postsbyCategory=await Posts.find({category:req.body.category});
            res.status(200).json(postsbyCategory);

    }catch(error){
        res.status(404).json({message:message.error});

    }

}
// afficher les annonces suivant un mot clé
exports.getPostsbyKey=async(req, res)=>{
    const key=req.body.title;
   const expression=new RegExp(`.*${key}.*`);


    try{
    const postsbyKey=await Posts.find({title:{$regex:expression}}).sort({publishedAt:'desc'}); 
   
       res.status(200).json(postsbyKey);

    }catch(error){
        res.status(404).json({message:message.error}); 
    }

}