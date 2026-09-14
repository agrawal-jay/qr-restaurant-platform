const express = require("express");

const router = express.Router();

const { getCustomerMenu } = require("../Controllers/customerMenu.controller");

router.get("/:restaurantId", getCustomerMenu);

module.exports = router;