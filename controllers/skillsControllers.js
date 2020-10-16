const db = require("../db/lowDbSetup");

exports.getSkills = (req, res) => {
  const skills = db.get("skills").value();
  res.send(skills);
};

exports.getSkillById = (req, res) => {
  const { id } = req.params;
  let skill = db.get("skills").find({ id }).value();
  res.send(skill);
};

exports.postSkill = (req, res) => {
  if (!req.body.title) {
    return res.send({ error: "Please provide a title field!" });
  }
  let skillNew = { id: Date.now().toString(), ...req.body };
  db.get("skills").push(skillNew).write();
  res.send(skillNew);
};

exports.patchSkill = (req, res) => {
  const { id } = req.params;
  let skillToUpdate = db.get("skills").find({ id }).value();
  Object.assign(skillToUpdate, { ...req.body });
  res.send(skillToUpdate);
};

exports.deleteSkill = (req, res) => {
  const { id } = req.params;
  let skill = db.get("skills").remove({ id });
  res.send(skill);
};
