const express=require('express')

const router=express.Router()

const {createOrder}=require("../Controllers/orders.controller")


router.post("/create",createOrder);


module.exports=router;