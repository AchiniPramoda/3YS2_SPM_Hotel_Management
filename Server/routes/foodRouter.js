const router = require('express').Router()
const foodCtrl = require('../controllers/foodCtrl')


router.route('/foods')
    .get(foodCtrl.getFoods)
    .post( foodCtrl.createFood)

router.route('/foods/:id')
    .delete( foodCtrl.deleteFood)
    .put( foodCtrl.updateFood)


module.exports = router

