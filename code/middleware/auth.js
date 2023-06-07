const User=require('../models/user');
const jwt=require('jsonwebtoken')
require("dotenv").config();

const authentication=async(req,res,next)=>{
    try{
    
        const token=req.header('Authentication')
        console.log(token)
        const user =jwt.verify(token,process.env.JWT_KEY);
        if(!user){
            return res.json({message:"there is no such userid"})
        }
        console.log(user.userId)
        let person=await User.findByPk(user.userId)
        req.user=person;
        next();
    }catch(e){
        console.log(e);
        console.log("jws fucoink")
        res.status(500).json({success:false})
    }
}

module.exports={
    authentication
}