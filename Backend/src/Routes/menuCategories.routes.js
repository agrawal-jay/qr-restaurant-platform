const express=require('express')

const router=express.Router()

const {createMenuCategories}=require("../Controllers/menuCategories.controller")
const {getMenuCategories}=require("../Controllers/menuCategories.controller")

router.post("/create/:id",createMenuCategories);

router.get("/get/:id",getMenuCategories);

module.exports=router;

