const express = require('express');
const { registerController, loginController, productController, categoryController, orderController, addressController, userController } = require('../controllers');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/products', productController.createProdcut);
router.post('/categories', categoryController.createCategory);
router.post('/addresses', addressController.createAddress);
router.post('/orders', orderController.createOrder);

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);

router.put('/product-images/:id', productController.updateProductImages);
router.put('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;
