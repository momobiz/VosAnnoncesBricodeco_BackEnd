const express=require('express'); 
const {getPosts, createPosts, updatePosts, deletePosts, getPostsbyCategory, getPostsbyKey}=require("../controllers/posts.js");
const {postRule, validator}=require("../Middleware/validator.js");


const router=express.Router(); 


router.get('/showposts', getPosts);
router.post('/createpost', postRule(), validator, createPosts); 
router.put('/updatepost/:id',updatePosts);
router.delete('/deletepost/:id',deletePosts);

router.get('/searchbycategory', getPostsbyCategory);
router.get('/seachbykeyword', getPostsbyKey);


module.exports=router;