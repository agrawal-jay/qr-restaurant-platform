const menuItemsModel= require("../Models/menuItems.model")

const createMenuItems=async(req,res)=>{

    const {id} = req.params;
    const {category_id,name,price}=req.body;

    const menu= await menuItemsModel.createMenuItems(id,category_id,name,price);

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


const getMenuItems = async (req, res) => {

    const { id } = req.params;

    const menu = await menuItemsModel.getMenuItems(id);

    if (!menu || menu.length === 0) {
        return res.status(404).json({
            message: "Menu items not found",
            success: false
        });
    }

    const data = {};

    menu.forEach((item) => {

        const category = item.category_name;

        if (!data[category]) {
            data[category] = [];
        }

        data[category].push({
            id: item.id,
            name: item.name,
            price: item.price
        });
    });

    return res.status(200).json({
        success: true,
        data: data
    });
};


module.exports={createMenuItems,getMenuItems}