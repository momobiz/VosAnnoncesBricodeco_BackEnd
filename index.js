const express=require("express");
const connectDB = require("./config/connectDB");
const cors=require("cors");
const postsRouter=require("./Routes/posts.js");
const usersRouter=require("./Routes/users.js");

const auth=require("./Middleware/auth.js"); 
const path = require('path');


const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('images'));

app.use(cors());
connectDB();

app.use('/posts', postsRouter); 
app.use('/users',usersRouter); 

//app.use("/test",auth, (req, res)=>res.json({message:"reussite de l authentification"}) )

const port=process.env.Port||5000;






app.listen(port, ()=>{
    try{
        console.log(`server is listening on port ${port}`)

    }catch(error){
            console.log(message.error);

    }
})