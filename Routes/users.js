const express=require("express");
const {getUsers, createUsers}=require("../controllers/users.js");
const {userRule, validator}=require("../Middleware/validator.js");


const router=express.Router();

router.get('/',getUsers); 
router.post('/',userRule(), validator, createUsers);
module.exports=router;