const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userModel = require("../Models/user.model")
const restaurantModel = require("../Models/restaurant.model")

const signup = async ({ name, password, email, restaurantName }) => {
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser) {
        throw new Error("User already exist!!");
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const restaurant = await restaurantModel.createRestaurant(restaurantName);
    const user = await userModel.createUser({
        name, email, passwordHash, restaurantId: restaurant.id
    })

    return { user, restaurant };
}

const signin = async ({ email, password }) => {
    const user = await userModel.findUserByEmail(email);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isvalidpassword = await bcrypt.compare(
        password,
        user.password_hash
    )

    if (!isvalidpassword) {
        throw new Error("Invaid username or password")
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            role:user.role,
            restaurantId: user.restaurant_id,

        },
        process.env.JWT_SECRET
        , {
            expiresIn: "1h"

        }
    )

    return {
        user:{
            id:user.id,
            email:user.email,
            role:user.role,
            restaurantId:user.restaurant_id
        },
        token
    }

}

module.exports = { signup ,signin}