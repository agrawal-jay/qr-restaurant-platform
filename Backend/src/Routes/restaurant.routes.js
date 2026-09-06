const express=require('express')

const router=express.Router()
const {getRestaurant}=require("../Controllers/restaurant.controller")
const {updateRestaurant}=require("../Controllers/restaurant.controller")

router.get("/:id",getRestaurant);
router.put("/update/:id",updateRestaurant);

module.exports=router;



