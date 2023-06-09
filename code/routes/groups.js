const express=require('express')
const route=express.Router();
const group=require("../controllers/groups")
const userauthenticate=require('../middleware/auth')



route.post("/addgroup",userauthenticate.authentication,group.addgroup)
route.get("/getname",userauthenticate.authentication,group.getgroups)

module.exports=route