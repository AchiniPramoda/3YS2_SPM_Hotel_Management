const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    description: {
        type: String,
        required: true,
        min: 3,
        max: 1255,
    },
    other: {
        type: String,
        required: true,
        min: 3,
        max: 1255,
    },
    imageURL: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);