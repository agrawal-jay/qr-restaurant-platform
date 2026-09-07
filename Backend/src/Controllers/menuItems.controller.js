const menuItemsModel= require("../Models/menuItems.model")

const createMenuItems=async(req,res)=>{

    const {id} = req.params;

    const {categoryId,name,price}=req.body;

    const menu= await menuItemsModel.createMenuItems(id,categoryId,name,price);

    if(!menu){
        return res.status(404).json({
            message:"something went wrong",
            success:false
        })
    }

    return res.status(200).json({
        sucess:true,
        data: menu
    })
}



const getMenuItems=async(req,res)=>{

    const {id} = req.params;



    const menu= await menuItemsModel.getMenuItems(id);

    if(!menu){
        return res.status(404).json({
            message:"something went wrong",
            success:false
        })
    }

    return res.status(200).json({
        sucess:true,
        data: menu
    })
}



module.exports={createMenuItems,getMenuItems}