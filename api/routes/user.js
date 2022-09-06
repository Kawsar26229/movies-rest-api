const express = require('express');
const { registerController, loginController, getUsersController } = require('../controller/usersController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

// Registration Router
router.post('/registration', registerController);

// Login Router
router.post('/login', loginController);

// Get Users Router
router.get('/', authenticate, getUsersController);

module.exports = router;