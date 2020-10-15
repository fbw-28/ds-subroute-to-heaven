const express = require('express');
// mini API for managing one resource only
const router = express.Router()

const {
    getAllTodos,
    getSingleTodo,
    addNewTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todosController")

router.get('/', getAllTodos);
router.post('/', addNewTodo);
router.get('/:id', getSingleTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

// export our sub API
module.exports = router