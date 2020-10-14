const express = require('express');
const router = express.Router()

const { getAllUsers, getUser, addUser, updateUser, deleteUser} = require("../controllers/usersController")
// routes for managing users...

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', addUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router