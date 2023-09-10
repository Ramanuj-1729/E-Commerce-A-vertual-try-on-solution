const express = require('express');
const { registerController, loginController } = require('../controllers');
const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);

module.exports = router;
