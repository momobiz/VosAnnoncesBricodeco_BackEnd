const express=require("express");
const connectDB = require("./config/connectDB");
const cors=require("cors");
const postsRouter=require("./Routes/posts.js");
const usersRouter=require("./Routes/users.js");


const app=express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/posts', postsRouter); 
app.use('/users',usersRouter); 

const port=process.env.Port||5000;






app.listen(port, ()=>{
    try{
        console.log(`server is listeneing on port ${port}`)

    }catch(error){
            console.log(message.error);

    }
})