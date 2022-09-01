const router = require("express").Router();
const Restaurant = require("../models/Restaurant");

/*Router for get all Restaurants*/
router.get("/", async (req, res) => {

    await Restaurant.find()
        .then(restaurants => res.send(restaurants))
        .catch(err => res.status(400).send('Error: ' + err))

});