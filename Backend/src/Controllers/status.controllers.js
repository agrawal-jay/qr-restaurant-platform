const statusModel= require("../Models/status.model")

const updateStatus=async(req,res)=>{

    const {id} = req.params;
    const {status}=req.body;

    const updatedstatus= await statusModel.updateStatus(status,id);

    if(!updatedstatus){
        return res.status(404).json({
            message:"Restaurant not found",
            success:false
        })
    }

    return res.status(200).json({
        sucess:true,
        data: updatedstatus
    })

}

module.exports={updateStatus};