const customerMenuModel = require("../Models/customerMenu.model");

const getCustomerMenu = async (req, res) => {

    const { restaurantId } = req.params;

    const menu = await customerMenuModel.getCustomerMenu(restaurantId);

    if (!menu || menu.length === 0) {
        return res.status(404).json({
            message: "Menu not found",
            success: false
        });
    }

    const data = {};

    menu.forEach((item) => {

        const category = item.category_name;

        if (!data[category]) {
            data[category] = [];
        }

        data[category].push({
            id: item.id,
            name: item.name,
            
            price: item.price
        });
    });

    return res.status(200).json({
        success: true,
        data: data
    });
};

module.exports = { getCustomerMenu };