const express = require("express");
const router = express.Router();

let todos = [
  { id: "1", name: "Wake the cat", done: false },
  { id: "2", name: "Make a Corona Test", done: false },
  { id: "3", name: "Trim off your neighbours beard", done: true },
  {
    id: "4",
    name: "Learn to meditate and become one with the backend",
    done: false,
  },
];

router.get("/", (req, res) => {
  res.send(todos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  let todo = todos.find((todo) => todo.id == id);
  res.send(todo);
});

router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.send({ error: "Please provide a name field!" });
  }
  let todoNew = { id: Date.now().toString(), ...req.body };
  todos.push(todoNew);
  res.send(todoNew);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  let todo = todos.find((todo) => todo.id == id);
  Object.assign(todo, { ...req.body });
  res.send(todo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let todo = todos.find((todo) => todo.id == id); // find item to delete
  todos = todos.filter((todo) => todo.id != id); // delete item by filtering it out
  res.send(todo); // return deleted item
});

module.exports = router;
