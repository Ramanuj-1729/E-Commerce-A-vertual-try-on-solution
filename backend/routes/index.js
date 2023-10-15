const express = require('express');
const { registerController, loginController, productController, categoryController, orderController, addressController, userController } = require('../controllers');
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
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.put('/product-image/:id', adminAuth, productController.updateProductImage);
router.put('/product-images/:id', adminAuth, productController.updateProductImages);
router.delete('/products/:id', adminAuth, productController.deleteProduct);

// Category Routes
router.post('/categories', adminAuth, categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategory);
router.put('/categories/:id', adminAuth, categoryController.updateCategory);
router.delete('/categories/:id', adminAuth, categoryController.deleteCategory);

// Order Routes
router.post('/orders', userAuth, orderController.createOrder);
router.get('/orders', userAuth, orderController.getOrders);
router.get('/orders/:id', userAuth, orderController.getOrder);
router.put('/orders/:id', userAuth, orderController.updateOrder);
router.delete('/orders/:id', userAuth, orderController.deleteOrder);

// Address Routes
router.post('/addresses', userAuth, addressController.createAddress);
router.get('/addresses', userAuth, addressController.getAddresses);
router.get('/addresses/:id', userAuth, addressController.getAddress);
router.put('/addresses/:id', userAuth, addressController.updateAddress);
router.delete('/addresses/:id', userAuth, addressController.deleteAddress);

module.exports = router;
