const pool=require('../Config/db')

const createTable=async (restaurantId,tableNumber)=>{
    const query='INSERT INTO restaurants_table (restaurant_id,table_number) VALUES ($1,$2) RETURNING id,restaurant_id,table_number,qr_code,created_at'
    const result=await pool.query(query,[restaurantId,tableNumber]);
    return result.rows[0];

}

const getTablesById=async (id)=>{
    const query='SELECT * FROM restaurants_table where id=$1';
    const result=await pool.query(query,[id]);
    return result.rows;
}

const updateQrCode=async (qrCode,tableId)=>{
    const query='UPDATE restaurants_table SET qr_code=$1 WHERE id=$2 RETURNING id,restaurant_id,table_number,qr_code,created_at';
    const result=await pool.query(query,[qrCode,tableId]);
    return result.rows[0];
}

const getTableById=async (id)=>{
    const query=' SELECT id, restaurant_id, table_number FROM restaurants_table WHERE id = $1';
    const result=await pool.query(query,[id]);
    return result.rows[0];
}


module.exports={createTable,getTablesById,getTableById,updateQrCode}