const pool=require('../Config/db')

const createMenuItems=async (restaurantId,categoryId,name,price)=>{
    const query='INSERT INTO menu_items (restaurant_id,category_id,name,price) VALUES ($1,$2,$3,$4) RETURNING id,name,price,restaurant_id,category_id,created_at'

    const result=await pool.query(query,[restaurantId,categoryId,name,price]);
    return result.rows;

}

const getMenuItems=async (restaurantId)=>{
    const query='SELECT * from menu_items where restaurant_id=$1'

    const result=await pool.query(query,[restaurantId]);
    return result.rows;

}


module.exports={createMenuItems,getMenuItems}