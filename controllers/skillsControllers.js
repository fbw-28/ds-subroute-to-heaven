const db = require("../db-setup");

exports.getAllSkills = (req, res) => {
  let skills = db.get("skills").value();
  res.send(skills);
};

exports.getSkill = (req, res) => {
  const { id } = req.params;
  let skill = db.get("skills").find({ id }).value();
  res.send(skill);
};

exports.addSkill = (req, res) => {
  if (!req.body.title) {
    return res.send({ error: "Please provide a title field!" });
  }

  let skillNew = { id: Date.now().toString(), ...req.body };
  db.get("skills").push(skillNew).write();
  res.send(skillNew);
};

exports.updateSkill = (req, res) => {
  const { id } = req.params;
  const newSkill = req.body;
  const updatedSkill = db.get("skills").find({ id }).assign(newSkill).write();
  res.send(newSkill);
};

exports.deleteSkill = (req, res) => {
  const { id } = req.params;
  let skill = db.get("skills").find({ id }).value();
  //  find item to delete
  db.get("skills").remove({ id }).write();

  res.send(skill); // return deleted item
};
