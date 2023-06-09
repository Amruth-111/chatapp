
const messages=require('../models/messages')
require('dotenv').config();
const users=require('../models/user')

exports.messages=async(req,res)=>{
    try{
        console.log(req.body)
        const {msg}=req.body
        const groupId=req.body.groupId
        console.log(msg)
        const data=await messages.create({
        message:msg,
        userId:req.user.id,
        groupId:groupId,
        userName:req.user.name
    })
    res.json({message:data,success:true})

    }catch(e){
        console.log(e)
    }


}

exports.all_message=async(req,res)=>{
    try{
        const groupid =req.header("Authorization")
        const data=await messages.findAll({where:{groupId:groupid}})
        res.json({allData:data})
        console.log(data)
    }catch(e){
        console.log(e)
        res.json({error:e,success:false})
    }

}