const tablesModel= require("../Models/tables.model")

const createTables=async(req,res)=>{

    const {id} = req.params;
    const {table_number}=req.body;

    const tables= await tablesModel.createTable(id,table_number);

    if(!tables){
        return res.status(404).json({
            message:"something went wrong",
            success:false
        })
    }

   

    return res.status(200).json({
        sucess:true,
        data: tables
    })
}


const getTables = async (req, res) => {

    const { id } = req.params;

    const menu = await tablesModel.getTablesById(id);

    if (!menu ) {
        return res.status(404).json({
            message: "Menu items not found",
            success: false
        });
    }


    return res.status(200).json({
        success: true,
        data: menu
    });
};


module.exports={createTables,getTables}