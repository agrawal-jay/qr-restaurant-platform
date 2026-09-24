const express=require('express')

const router=express.Router()
const {updateStatus}=require("../Controllers/status.controllers")
router.patch("/status/:id",updateStatus);

module.exports=router;