const express=require('express')

const router=express.Router()

const {createOrder}=require("../Controllers/orders.controller")
const {getOrder}=require("../Controllers/orders.controller")


router.post("/create",createOrder);
router.post("/get/:id",getOrder);


module.exports=router;