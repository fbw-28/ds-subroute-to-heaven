const express = require('express')
const router = express.Router()

const { getAllTodos, getTodos, addTodos, updateTodos, deleteTodos} = require("../controllers/todosController")


// routes for managing TODOS...

router.get('/', getAllTodos)

router.get('/:id', getTodos)

router.post('/', addTodos)

router.patch('/:id', updateTodos)

router.delete('/:id', deleteTodos)

module.exports = router