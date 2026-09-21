const pool = require("../Config/db");

const getTable = async (restaurantId, tableNumber) => {

    const query = `
        SELECT id, restaurant_id, table_number
        FROM restaurants_table
        WHERE restaurant_id = $1
        AND table_number = $2
    `;

    const result = await pool.query(query, [
        restaurantId,
        tableNumber
    ]);

    return result.rows[0];
};


const createOrder = async (restaurantId, tableId, total_amount) => {

    const query = `
        INSERT INTO orders
        (restaurant_id, table_id, total_amount)
        VALUES ($1, $2, $3)
        RETURNING *
    `;

    const result = await pool.query(query, [
        restaurantId,
        tableId,
        total_amount
    ]);

    return result.rows[0];
};


const createOrderItem = async (
    orderId,
    menuItemId,
    quantity,
    price
) => {

    const query = `
        INSERT INTO order_items
        (order_id, menu_item_id, quantity, price)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `;

    const result = await pool.query(query, [
        orderId,
        menuItemId,
        quantity,
        price
    ]);

    return result.rows[0];
};

const getOrder=async(orderId)=>{
    const query='SELECT * from orders where id=$1 RETURNING *';

    const result=await pool.query(query,[orderId]);
    return result.rows[0];


}

const getOrderItems=async(orderId)=>{
    const query='SELECT * from order_items where order_id=$1 RETURNING *';
    const result=await pool.query(query,[orderId]);
    return result.rows[0];

}


module.exports = {
    getTable,
    createOrder,
    createOrderItem,
    getOrder,
    getOrderItems
};