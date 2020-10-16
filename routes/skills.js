const express = require("express");
const router = express.Router();

const controllers = require("../controllers/skillsControllers");

const {
  getSkills,
  getSkillById,
  postSkill,
  patchSkill,
  deleteSkill,
} = controllers;

router.get("/", getSkills);

router.get("/:id", getSkillById);

router.post("/", postSkill);

router.patch("/:id", patchSkill);

router.delete("/:id", deleteSkill);

module.exports = router;
