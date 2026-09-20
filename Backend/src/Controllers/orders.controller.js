const ordersModel = require("../Models/orders.model");

const createOrder = async (req, res) => {

    const {
        restaurant_id,
        table_number,
        items
    } = req.body;


    if (
        !restaurant_id ||
        !table_number ||
        !items ||
        items.length === 0
    ) {
        return res.status(400).json({
            success: false,
            message: "restaurant_id, table_number and items are required"
        });
    }


    // Find table using restaurant_id + table_number

    const table = await ordersModel.getTable(
        restaurant_id,
        table_number
    );


    if (!table) {
        return res.status(404).json({
            success: false,
            message: "Table not found"
        });
    }


    // Calculate total

    let total_amount = 0;

    for (const item of items) {

        const price = item.price;

        total_amount += price * item.quantity;
    }


    // Create order using actual table ID

    const order = await ordersModel.createOrder(
        restaurant_id,
        table.id,
        total_amount
    );


    // Create order items

    for (const item of items) {

        await ordersModel.createOrderItem(
            order.id,
            item.menu_item_id,
            item.quantity,
            item.price
        );
    }


    return res.status(201).json({
        success: true,
        message: "Order was created",
        data: order
    });
};


module.exports = {
    createOrder
};