const db = require("../db/lowDbSetup")

exports.getUsers = (req, res) => {
    const users = db.get("users").value();
  res.send(users);
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  let user = db.get("users").find({id}).value();
  res.send(user);
};

exports.postUser = (req, res) => {
  if (!req.body.username) {
    return res.send({ error: "Please provide a username field!" });
  }
  let usersNew = db.get("users").push({ id: Date.now().toString(), ...req.body }).write();
  res.send(usersNew);
};

exports.patchUser = (req, res) => {
  const { id } = req.params;
  let userToUpdate = db.get("users").find({id}).value();
  Object.assign(userToUpdate, { ...req.body });
  res.send(userToUpdate);
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  let user = db.get("users").remove({id}).write(); 
  res.send(user);
};
