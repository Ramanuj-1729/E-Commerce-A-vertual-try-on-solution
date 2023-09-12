const express = require('express');
const { registerController, loginController, productController, categoryController } = require('../controllers');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/products', productController.createProdcut);
router.post('/categories', categoryController.createCategory);

module.exports = router;
