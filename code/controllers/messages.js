
const messages=require('../models/messages')
require('dotenv').config();

exports.messages=async(req,res)=>{
    try{
        console.log(req.body)
        const {msg}=req.body
        console.log(msg)
        const data=await messages.create({
        message:msg,
        userId:req.user.id
    })
    res.json({message:data,success:true})

    }catch(e){
        console.log(e)
    }


}