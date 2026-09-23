const express=require('express')

const router=express.Router()

const {createOrder}=require("../Controllers/orders.controller")
const {getOrder}=require("../Controllers/orders.controller")


router.post("/create",createOrder);
router.get("/get",getOrder);


module.exports=router;