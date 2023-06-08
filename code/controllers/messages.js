
const messages=require('../models/messages')
require('dotenv').config();
const users=require('../models/user')

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

exports.all_message=async(req,res)=>{
    try{
        console.log(users.__proto__)
        const data=await messages.findAll()
        console.log(data);
        res.json({Data:data,success:true})
    }catch(e){
        console.log(e)
        res.json({error:e,success:false})
    }

}