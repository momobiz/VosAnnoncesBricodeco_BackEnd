const express=require("express");
const {getUsers, createUsers}=require("../controllers/users.js");
const {userRule, validator}=require("../Middleware/validator.js");


const router=express.Router();

router.get('/showusers',getUsers); 
router.post('/createuser',userRule(), validator, createUsers);


module.exports=router;