const express=require('express')
const route=express.Router();
const message=require("../controllers/messages")
const userauthenticate=require('../middleware/auth')


route.post("/messagess",userauthenticate.authentication,message.messages)
route.get("/all-messages",message.all_message)
route.post("/addToGroup",message.addToGroup)
route.get("/getuser",userauthenticate.authentication,message.getuser)
route.get("/allusers",message.allusers)
route.post("/removeMember",message.removeMember)

module.exports=route