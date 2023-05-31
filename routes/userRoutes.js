const express = require("express");

const router = express.Router();

const authController = require("../Ejercicio-login-API/controllers/authController.js");

//importar el userController
const userController = require("../Ejercicio-login-API/controllers/userController.js");

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);  
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', authController.authenticateUser)

module.exports = router;