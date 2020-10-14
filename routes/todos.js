const express = require("express");
const router = express.Router();
const {getAllTodos, getTodo, addTodo, updateTodo, deleteTodo} = require('../controllers/todosControllers')



// routes for managing TODOS...
// move us away from here please...

router.get("/", getAllTodos);
router.get("/:id", getTodo )
router.post("/", addTodo)
router.patch("/:id", updateTodo)
router.delete("/:id", deleteTodo)

module.exports = router;
