const pool=require('../Config/db')

const createMenuCategories=async (restaurantId,name)=>{
    const query='INSERT INTO menu_categories (restaurant_id,name) VALUES ($1,$2) RETURNING id,name,restaurant_id,created_at'

    const result=await pool.query(query,[restaurantId,name]);
    return result.rows[0];

}

const getMenuCategories=async (restaurantId)=>{
    const query='SELECT * FROM menu_categories WHERE restaurant_id=$1'

    const result=await pool.query(query,[restaurantId]);
    return result.rows;

}

module.exports={createMenuCategories,getMenuCategories}