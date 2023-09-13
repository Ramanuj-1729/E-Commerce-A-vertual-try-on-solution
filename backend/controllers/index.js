const registerController = require('../controllers/userControllers/registerController');
const loginController = require('../controllers/userControllers/loginController');
const productController = require('../controllers/productControllers/productController');
const categoryController = require('../controllers/productControllers/categoryController');
const orderController = require('../controllers/orderControllers/orderController');
const addressController = require('../controllers/orderControllers/addressController');

module.exports = { registerController, loginController, productController, categoryController, orderController, addressController };