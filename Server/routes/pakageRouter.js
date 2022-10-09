const router = require('express').Router()
const pakageCtrl = require('../controllers/pakageCtrl')


router.route('/pakages')
    .get(pakageCtrl.getPakages)
    .post( pakageCtrl.createPakage)

router.route('/pakages/:id')
    .delete( pakageCtrl.deletePakage)
    .put( pakageCtrl.updatePakage)


module.exports = router

