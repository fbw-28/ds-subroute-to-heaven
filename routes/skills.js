const express = require("express");
const router = express.Router();

let skills = [
  { id: "1", title: "Coding" },
  { id: "2", title: "Complaining" },
  { id: "3", title: "Procrastinating" },
  { id: "4", title: "Improving" },
  { id: "5", title: "Never giving up" },
];

const getSkillsController = (req, res) => {
  res.send(skills);
};

router.get("/", getSkillsController);

const getSkillsIdController = (req, res) => {
  const { id } = req.params;
  let skill = skills.find((skill) => skill.id == id);
  res.send(skill);
};
router.get("/:id", getSkillsIdController);

const postSkillsController = (req, res) => {
  if (!req.body.title) {
    return res.send({ error: "Please provide a title field!" });
  }
  let skillNew = { id: Date.now().toString(), ...req.body };
  skills.push(skillNew);
  res.send(skillNew);
};
router.post("/", postSkillsController);

const patchSkillsController = (req, res) => {
  const { id } = req.params;
  let skillToUpdate = skills.find((skill) => skill.id == id);
  Object.assign(skillToUpdate, { ...req.body });
  res.send(skillToUpdate);
};
router.patch("/:id", patchSkillsController);

const deleteSkillsController = (req, res) => {
  const { id } = req.params;
  let skill = skills.find((skill) => skill.id == id); // find item to delete
  skills = skills.filter((skill) => skill.id != id); // delete item by filtering it out
  res.send(skill); // return deleted item
};
router.delete("/:id", deleteSkillsController);

module.exports = router;
