const express=require('express')

const router=express.Router()

const {createMenuItems}=require("../Controllers/menuItems.controller")
const {getMenuItems}=require("../Controllers/menuItems.controller")

router.post("/create/:id",createMenuItems);
router.get("/get/:id",getMenuItems);

module.exports=router;