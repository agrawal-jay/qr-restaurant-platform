const restaurantModel= require("../Models/restaurant.model")

const getRestaurant=async(req,res)=>{

    const {id} = req.params;

    const restaurant= await restaurantModel.getRestaurantById(id);

    if(!restaurant){
        return res.status(404).json({
            message:"Restaurant not found",
            success:false
        })
    }

    return res.status(200).json({
        sucess:true,
        data: restaurant
    })

}


const updateRestaurant=async(req,res)=>{

    const {id} = req.params;
    const {name}=req.body;

    const restaurant= await restaurantModel.updateRestaurantById(name,id);

       if(!restaurant)
        {
        return res.status(404).json({
            message:"Restaurant not found",
            success:false
        })
    }else{
          return res.status(200).json({
        sucess:true,
        data: restaurant
    })

    }

  

    

}

module.exports={getRestaurant,updateRestaurant}