const db = require("../db-setup");

exports.getAllTodos = (req, res) => {
  let todos = db.get("todos").value();
  res.send(todos);
};

exports.getTodo = (req, res) => {
  const { id } = req.params;
  let todo = db.get("todos").find({ id }).value();
  res.send(todo);
};

exports.addTodo = (req, res) => {
  if (!req.body.name) {
    return res.send({ error: "Please provide a name field!" });
  }
  let todoNew = { id: Date.now().toString(), ...req.body };
  db.get("todos").push(todoNew).write();
  res.send(todoNew);
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const newTodo = req.body;
  let updatedTodo = db.get("todos").find({ id }).assign(newTodo).write();
  res.send(updatedTodo);
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  let todo = db.get("todos").find({ id }).value();
  db.get("todos").remove({ id }).write();
  // delete item by filtering it out
  res.send(todo); // return deleted item
};
