const express=require('express'); 
const {getPosts, createPosts, updatePosts, deletePosts, getPostsbyCategory, 
    getPostsbyKey, getMyPosts, postComment, createPosts1}=require("../controllers/posts.js");

const {postRule, validator, commentRule}=require("../Middleware/validator.js");
const {auth}=require("../Middleware/auth.js");

const multer=require("../Middleware/multerConfig.js");

const router=express.Router(); 


router.get('/showposts', getPosts);
router.post('/createpost', auth, multer, postRule(), validator, createPosts);
/************************************************************************* */
// createPost1 Methode pour tester l insertion des annonces pour un user prédéfinit
router.post('/createpost1', multer, postRule(),validator,createPosts1);



router.put('/updatepost/:id',auth, updatePosts);
router.delete('/deletepost/:id',auth, deletePosts);

router.get('/searchbycategory', getPostsbyCategory);
router.get('/seachbykeyword', getPostsbyKey);

// get posts by idUser
router.get('/getmyposts', auth, getMyPosts);

// add comment to  post 
router.post('/postcomment/:id_post', auth,commentRule(),validator, postComment); 




module.exports=router;