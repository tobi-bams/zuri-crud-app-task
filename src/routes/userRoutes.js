const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userController');


// Get All User Route
router.get('/user', userCtrl.getAllUsers)

// Create User Route
router.post('/user', userCtrl.createUser)

// Update User Route
router.put('/user/:id', userCtrl.updateUser)

// Delete User Route
router.delete('/user/:id', userCtrl.deleteUser)

module.exports = router;
