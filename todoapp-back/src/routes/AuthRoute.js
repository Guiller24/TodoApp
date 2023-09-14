const express = require('express');
const router = express.Router();

const AuthController = require('../controller/AuthController');

router.post('/users/login', AuthController.signin);

module.exports = router;