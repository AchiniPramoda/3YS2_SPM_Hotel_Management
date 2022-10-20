const router = require('express').Router()
const categoryCtrl1 = require('../controllers/categoryCtrl1')



router.route('/category')
    .get(categoryCtrl1.getCategories)
    .post(categoryCtrl1.createCategory)

router.route('/category/:id')
    .delete( categoryCtrl1.deleteCategory)
    .put( categoryCtrl1.updateCategory)


module.exports = router