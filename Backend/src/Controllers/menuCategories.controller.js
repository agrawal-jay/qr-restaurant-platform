const menuCategoriesModel= require("../Models/menuCategories.model")

const createMenuCategories=async(req,res)=>{

    const {id} = req.params;
    const {name}=req.body;

    const menu= await menuCategoriesModel.createMenuCategories(id,name);

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


const getMenuCategories=async(req,res)=>{

    const {id} = req.params;

    const menuCategories= await menuCategoriesModel.getMenuCategories(id);

    if(!menuCategories){
        return res.status(404).json({
            message:"Menu Categories not found",
            success:false
        })
    }

    return res.status(200).json({
        sucess:true,
        data: menuCategories
    })

}

module.exports={createMenuCategories,getMenuCategories}