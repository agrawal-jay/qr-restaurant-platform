const tablesModel= require("../Models/tables.model")
const QRCode=require('qrcode')

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

    
    const url=`http//:localhost:5173/menu/${tables.restaurant_id}/table/${tables.table_number}`;

        const qrCode=await QRCode.toDataURL(url);

        const qr_code=await tablesModel.updateQrCode(url,tables.id);

        if(!qr_code){
              return res.status(404).json({
            message:"something went wrong in qr code",
            success:false
        })

        }




   

    return res.status(200).json({
        sucess:true,
        data: {
            id: qr_code.id,
            restaurant_id: qr_code.restaurant_id,
            table_number: qr_code.table_number,
            qr_code: qr_code.qr_code,
            qrCode: qrCode
    
        }
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