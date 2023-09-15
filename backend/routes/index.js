const express = require('express');
const { registerController, loginController, productController, categoryController, orderController, addressController, userController } = require('../controllers');
const auth = require('../middlewares/userAuth');
const adminAuth = require('../middlewares/adminAuth');
const userAuth = require('../middlewares/userAuth');
const router = express.Router();

// User Routes
router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/users', adminAuth, userController.getUsers);
router.get('/users/:id', userAuth, userController.getUser);
router.put('/users/:id', userAuth, userController.updateUser);
router.delete('/users/:id', userAuth, userController.deleteUser);

// Product Routes
router.post('/products', adminAuth, productController.createProdcut);
router.put('/product-images/:id', adminAuth, productController.updateProductImages);

// Category Routes
router.post('/categories', adminAuth, categoryController.createCategory);

// Order Routes
router.post('/orders', userAuth, orderController.createOrder);

// Address Routes
router.post('/addresses', userAuth, addressController.createAddress);

module.exports = router;
