const express=require('express')

const router=express.Router()

const {createTables}=require("../Controllers/tables.controller")
const {getTables}=require("../Controllers/tables.controller")



router.post("/create/:id",createTables);
router.get("/get/:id",getTables);


module.exports=router;