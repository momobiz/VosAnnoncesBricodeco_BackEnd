const express=require('express'); 
const {getPosts, createPosts, updatePosts}=require("../controllers/posts.js");
const {postRule, validator}=require("../Middleware/validator.js");


const router=express.Router(); 


router.get('/', getPosts);
router.post('/', postRule(), validator, createPosts); 
router.put('/updatepost/:id',updatePosts);

module.exports=router;