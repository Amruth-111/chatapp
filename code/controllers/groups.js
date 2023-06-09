const messages=require('../models/messages')
require('dotenv').config();
const groupsdb=require('../models/groups')

const { where } = require("sequelize");
const usergroupdb = require('../models/usergroup');


exports.addgroup=async(req,res)=>{
    try{
        const gname=req.body.gname;
        console.log(gname)
        const data=await groupsdb.create({
            groupName:gname
        })
        console.log(data.dataValues)
        // res.json({success:true,data:data})
        const grp=data.dataValues.id
        const response=await usergroupdb.create({
            groupNameId:grp,
            userId:req.user.id,
            isAdmin:true
        })
        // console.log(response)
        res.json({data:data})

    }catch(e){
        console.log("err in create group backend",e)
        res.json({err:e})

    }
}

exports.getgroups=async(req,res)=>{
    try{
    const id=req.user.id;
    const data=await usergroupdb.findAll({where:{userId:id}})
    console.log("data",data)
    const namearr=[]
    const idarr=[]
    for(let i=0;i<data.length;i++){
        const groupNameId= data[i].dataValues.groupNameId
        const groupName=await groupsdb.findAll({where:{id:groupNameId}})
        console.log(groupName)
        console.log(groupNameId)
        groupName.forEach((ele2)=>{
            let name=ele2.dataValues.groupName
            let id=ele2.dataValues.id
            idarr.push(id)
            namearr.push(name)
            })

    }
    res.json({groupNames:namearr,groupId:idarr})
}catch(err){
    console.log("error getAllgroupnames",err)
    res.json({Error:err})
}
}