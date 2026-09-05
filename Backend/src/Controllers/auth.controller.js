const authService=require('../Services/auth.service')

const signup=async(req,res)=>{

    try{
        const {name,password,email,restaurantName}=req.body;
        const result=await authService.signup({
            name,password,email,restaurantName
        })

        res.status(201).json({
            success:true,
            message:"user created",
            data:result
        })


    }
    catch(error){
         res.status(400).json({
            success: false,
            message: error.message
        });

    }

}


const signin=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await authService.signin({email,password})
        
        res.status(200).json({
            success:true,
            message:"Login Successful",
            data:user  

        })

    }
    catch(error){
        res.status(500).json({
            message:error.message,
            sucess:false


        })

    }
}

module.exports = {
    signup,signin
};