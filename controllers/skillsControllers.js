let skills = [
  { id: "1", title: "Coding" },
  { id: "2", title: "Complaining" },
  { id: "3", title: "Procrastinating" },
  { id: "4", title: "Improving" },
  { id: "5", title: "Never giving up" },
];
exports.getSkills = (req, res) => {
  res.send(skills);
};

exports.getSkillById = (req, res) => {
  const { id } = req.params;
  let skill = skills.find((skill) => skill.id == id);
  res.send(skill);
};

exports.postSkill = (req, res) => {
  if (!req.body.title) {
    return res.send({ error: "Please provide a title field!" });
  }
  let skillNew = { id: Date.now().toString(), ...req.body };
  skills.push(skillNew);
  res.send(skillNew);
};

exports.patchSkill = (req, res) => {
  const { id } = req.params;
  let skillToUpdate = skills.find((skill) => skill.id == id);
  Object.assign(skillToUpdate, { ...req.body });
  res.send(skillToUpdate);
};

exports.deleteSkill = (req, res) => {
  const { id } = req.params;
  let skill = skills.find((skill) => skill.id == id); // find item to delete
  skills = skills.filter((skill) => skill.id != id); // delete item by filtering it out
  res.send(skill); // return deleted item
};
