const express=require("express");
const {getUsers, createUsers, getOneUser }=require("../controllers/users.js");
const {userRule, validator, userRuleAuth}=require("../Middleware/validator.js");

const {auth}=require("../Middleware/auth.js");
const {authenticate}=require("../controllers/authenticate.js");






const router=express.Router();

router.get('/showusers', getUsers); 
// creation d un nouveau user et affection d un Token
router.post('/createuser',userRule(), validator, createUsers);

//Authentification et affectation d un Token
router.post('/login',userRuleAuth(),validator, authenticate);

//si Token valid donc getOnUser
router.get('/user',auth, getOneUser )



module.exports=router;