const registerController = require('../controllers/authControllers/registerController');
const loginController = require('../controllers/authControllers/loginController');
const productController = require('../controllers/productControllers/productController');
const categoryController = require('../controllers/productControllers/categoryController');

module.exports = { registerController, loginController, productController, categoryController };