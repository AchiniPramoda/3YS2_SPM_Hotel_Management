const router = require("express").Router();
const Restaurant = require("../models/Restaurant");

/*Router for get all Restaurants*/
router.get("/", async (req, res) => {

    await Restaurant.find()
        .then(restaurants => res.send(restaurants))
        .catch(err => res.status(400).send('Error: ' + err))

});

/*Router for get Restaurant by Id*/
router.get("/:id", async (req, res) => {

    await Restaurant.findById(req.params.id)
        .then((restaurant) => res.send(restaurant))
        .catch(err => res.status(400).send("Error : " + err))

});

/*Router for create Restaurant*/
router.post('/AddRestaurant', async (req, res) => {

    const restaurantName = req.body.restaurantName;
    let restaurantExist = await Restaurant.findOne({
        restaurantName: restaurantName,
    });

    if (restaurantExist)
        return res.status(404).send("Restaurant already created!");


    let image = req.files.photo;

    let urlPrefix = "http://localhost:8080/static/images";
    let imageName = Date.now() + "-" + image.name;

    image.mv("./public/images/Restaurants/" + imageName, (err, result) => {
        if (err) return res.status(400).send("Error : " + err);
    });

    let imageURL = urlPrefix + "/Restaurants/" + imageName;

    let restaurant = new Restaurant({
        restaurantName: req.body.restaurantName,
        description: req.body.description,
        other: req.body.other,
        imageURL
    });

    try {
        await restaurant.save();
        res.send(restaurant);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error: ' + err);
    }

});