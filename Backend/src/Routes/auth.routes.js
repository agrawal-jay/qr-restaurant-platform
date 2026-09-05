const express=require('express')

const router=express.Router()

const {signup}=require('../Controllers/auth.controller')
const {signin}=require('../Controllers/auth.controller')

router.post("/signup",signup)
router.post("/signin",signin)
module.exports=router
