const express=require('express')
const route=express.Router();
const users=require("../controllers/user")

route.post("/signup",users.signup);
route.post("/signin",users.signin)

module.exports=route