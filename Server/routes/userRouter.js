const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')


/*router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)*/

router.get('/infor',  userCtrl.getUser)

router.patch('/addcart',  userCtrl.addCart)

router.get('/history',  userCtrl.history)


module.exports = router