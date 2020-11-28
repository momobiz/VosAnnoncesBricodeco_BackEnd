const jwt=require("jsonwebtoken");
const config=require("config");

exports.auth=(req, res, next)=>{
    const token=req.header('x-auth-token');
    if(!token) return res.status(401).json({message:"no Token"});
    const payload= jwt.verify(token,config.get( "SECRET"));
   

    try{
       
        
        const payload= jwt.verify(token,config.get( "SECRET"));
        req.id=payload.id;

      
        next();

    }catch(error){
        res.status('404').json({message:"token not valid"})
       
    }
}

