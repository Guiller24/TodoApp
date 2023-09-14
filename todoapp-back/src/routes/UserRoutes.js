const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');


router.get('/users', UserController.getAllUsers);
router.get('/users/:user_id', UserController.getUserById);
router.post('/users', UserController.createUser);
router.put('/users/:user_id', UserController.updateUser);
router.delete('/users/:user_id', UserController.deleteUser);

module.exports = router;    