const express = require('express');
// mini API for managing one resource only
const router = express.Router()

const {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
} = require("../controllers/usersController")

router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

// export our sub API
module.exports = router