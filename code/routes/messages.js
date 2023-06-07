const express=require('express')
const route=express.Router();
const message=require("../controllers/messages")
const userauthenticate=require('../middleware/auth')


route.post("/messagess",userauthenticate.authentication,message.messages)

module.exports=route