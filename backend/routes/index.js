const express = require('express');
const { registerController, loginController, productController, categoryController, orderController, addressController } = require('../controllers');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/products', productController.createProdcut);
router.post('/categories', categoryController.createCategory);
router.post('/addresses', addressController.createAddress);
router.post('/orders', orderController.createOrder);

router.put('/product-images/:id', productController.updateProductImages);

module.exports = router;
