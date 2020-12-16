const { json } = require("express");
const Posts=require("../Models/Posts.js");
const Users=require("../Models/Users.js");
const path=require("path");

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

    // const newPost=new Posts(req.body);
console.log("createPosts")

    const user=await Users.findById(req.id);

    const {title, category, description, price,duration,phone, city}=req.body;
    const {file}=req;

   
   const newPost=new Posts({
       idUser:req.id,
       userName:user.userName,
       avatar:user.avatar,
       title,
       category,
       photo:file && file.path||null,
       description,
       price,
       
       duration,
       phone,
       city

   })
   try{
       await newPost.save(); 
       res.status(201).json(newPost);

   }catch(error){
       res.status(404).json({message:error.message})
   }

}
/***************************************************** */
// test la creation de post
exports.createPosts1=async(req, res, next )=>{

    // const newPost=new Posts(req.body);
    //const user=await Users.findById(req.id);

  console.log('createpost1');

    const {title, category, description, price,duration,phone, city}=req.body;
    const {file}=req;

    


   const newPost=new Posts({
       idUser:"5fc168ab1c8cc62b2cba88b9",
       userName:"hamiodu",
       avatar:"//www.gravatar.com/avatar/16193956ea3c250a91b71bb5c13b1812?s=200&r=pg&d=mm",
       title,
       category,
       photo:file && file.path||null,
       description,
       price,
       
       duration,
       phone,
       city

   })
   try{
       await newPost.save(); 
       res.status(201).json(newPost);

       

       
      
    
     
      

   }catch(error){
       res.status(404).json({message:error.message})
   }

}
/************************************************************* */
// update Posts
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
        res.status(404).json({error}); 

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
// get my posts 
exports.getMyPosts=async(req, res)=>{
    try{
        const posts=await Posts.find({idUser:req.id}).sort({publishedAt:'desc'});
        if(!posts) return json("inexistant posts");
        res.status(201).json(posts);
    }catch(error){
        res.status(401).json('server error')
    }
    

}
/******************************************/
/*****        post comment           ******/
/**************************************** */
exports.postComment=async(req, res)=>{

    try{
        const user=await Users.findById(req.id);
       const post= await Posts.findById(req.params.id_post);
     

     const newComment={
         text:req.body.text,
         idUser:req.id,
         userName:user.userName
     }
 
      post.comments.unshift(newComment);
   
        await post.save(); 
        res.status(201).json(post);
 
    }catch(error){
        res.status(404).json({message:error.message})
    }

}
