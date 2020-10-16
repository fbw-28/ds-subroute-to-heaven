const express = require("express");
const router = express.Router();

const controllers = require("../controllers/todosControllers");

const { getTodos, getTodoById, postTodo, patchTodo, deleteTodo } = controllers;

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", postTodo);

router.patch("/:id", patchTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
