const pool=require("../Config/db")

const getCustomerMenu=async (restaurantId)=>{
 const query='SELECT menu_items.id,menu_items.restaurant_id,menu_items.name,menu_items.price,menu_categories.name AS category_name FROM menu_items JOIN menu_categories ON menu_items.category_id=menu_categories.id WHERE menu_items.restaurant_id=$1 ORDER BY menu_categories.id,menu_items.id';
const result=await pool.query(query,[restaurantId]);

return result.rows;

}

module.exports={getCustomerMenu}