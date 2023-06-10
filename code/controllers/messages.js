
const { LicenseManagerUserSubscriptions } = require('aws-sdk');
const messages=require('../models/messages')
require('dotenv').config();
const users=require('../models/user')
const usergrpdb=require('../models/usergroup')

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

let groupid
exports.all_message=async(req,res)=>{
    try{
         groupid =req.header("Authorization")
        const data=await messages.findAll({where:{groupId:groupid}})
        res.json({allData:data})
        console.log(data)
    }catch(e){
        console.log(e)
        res.json({error:e,success:false})
    }

}


//get all users
exports.allusers=async(req,res)=>{
    try{
        const data=await users.findAll()
        res.json({allUser:data})
    }catch(e){
        console.log("get All the users error",e)
        res.json({Error:e})
    }
}

//add to group

exports.addToGroup=async(req,res)=>{
    try{
        const userId= req.body.userId
        const groupId= req.body.groupId
        console.log(userId,groupId)
        const data=await usergrpdb.create({
            userId:userId,
            groupNameId:groupId
        })   
        res.json({groupAdd:data})
    }catch(err){
        console.log("error in add to group",err)
    }
}



//get the users from the group
exports.getuser=async(req,res)=>{
    try{
        const userId=req.user.id

        const data= await usergrpdb.findAll({where:{groupNameId:groupid}})
          let arr=[]
          for(let i=0;i<data.length;i++){
           const id=data[i].dataValues.userId
           const data2=await users.findOne({where:{id:id}})
            arr.push(data2.dataValues)
          }
          res.json({allUser:arr,isAdmin:data})

    }catch(e){

        console.log("error in get prefered users",e)
    }
}

//removing a member from group

exports.removeMember=async(req,res)=>{
    try{
        
        const userId= req.body.userId
        const groupId=req.body.groupId
        const data=await usergrpdb.findOne({where:{userId:userId,groupNameId:groupId}})
        data.destroy()
        
    }catch(e){
        console.log("error in remove method",e)
    }
}



