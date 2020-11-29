const express=require('express'); 
const {getPosts, createPosts, updatePosts, deletePosts, getPostsbyCategory, 
    getPostsbyKey, getMyPosts, postComment}=require("../controllers/posts.js");

const {postRule, validator, commentRule}=require("../Middleware/validator.js");
const {auth}=require("../Middleware/auth.js")

const router=express.Router(); 


router.get('/showposts', getPosts);
router.post('/createpost', auth, postRule(), validator, createPosts);

router.put('/updatepost/:id',auth, updatePosts);
router.delete('/deletepost/:id',auth, deletePosts);

router.get('/searchbycategory', getPostsbyCategory);
router.get('/seachbykeyword', getPostsbyKey);

// get posts by idUser
router.get('/getmyposts', auth, getMyPosts);

// add comment to  post 
router.post('/postcomment/:id_post', auth,commentRule(),validator, postComment); 




module.exports=router;