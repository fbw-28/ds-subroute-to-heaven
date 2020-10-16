const db = require("../db/lowDbSetup");

exports.getTodos = (req, res) => {
  const todos = db.get("todos").value();
  res.send(todos);
};

exports.getTodoById = (req, res) => {
  const { id } = req.params;
  let todo = db.get("todos").find({ id }).value();
  res.send(todo);
};

exports.postTodo = (req, res) => {
  if (!req.body.name) {
    return res.send({ error: "Please provide a name field!" });
  }
  let todoNew = { id: Date.now().toString(), ...req.body, done: false };
  db.get("todos").push(todoNew).write();
  res.send(todoNew);
};

exports.patchTodo = (req, res) => {
  const { id } = req.params;
  let todo = db.get("todos").find({ id }).value();
  Object.assign(todo, { ...req.body });
  res.send(todo);
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  let todo = db.get("todos").remove({ id }).write();
  res.send(todo);
};
