const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentCtrl')



router.route('/payment')
    .get( paymentCtrl.getPayments)
    .post(paymentCtrl.createPayment)


module.exports = router
