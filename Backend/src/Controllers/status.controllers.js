const statusModel= require("../Models/status.model")

const updateStatus=async(req,res)=>{

    const {id} = req.params;

    const status= await statusModel.updateStatus(id);

    if(!status){
        return res.status(404).json({
            message:"Restaurant not found",
            success:false
        })
    }

    return res.status(200).json({
        sucess:true,
        data: status
    })

}

module.exports={updateStatus};