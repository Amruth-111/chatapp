const express=require('express')
const route=express.Router();
const users=require("../controllers/user")

route.post("/signup",users.signup);

module.exports=route