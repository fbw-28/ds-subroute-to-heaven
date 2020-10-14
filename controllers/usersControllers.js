const db = require("../db-setup");

exports.getAllUsers = (req, res) => {
  let users = db.get("users").value();
  res.send(users);
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  let user = db.get("users").find({ id }).value();
  res.send(user);
};

exports.addUser = (req, res) => {
  if (!req.body.username) {
    return res.send({ error: "Please provide a username field!" });
  }
  let userNew = { id: Date.now().toString(), ...req.body };
  db.get("users").push(userNew).write();

  res.send(userNew);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  let userToUpdate = db.get("users").find({ id }).assign(userData).write();
  res.send(userToUpdate);
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  let user = db.get("users").find({ id }).value();
  db.get("users").remove({ id }).write();

  res.send(user);
};
