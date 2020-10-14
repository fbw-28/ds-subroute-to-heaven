const express = require("express");
const router = express.Router();
const {
  getAllSkills,
  getSkill,
  addSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillsControllers");

router.get("/", getAllSkills);
router.get("/:id", getSkill);
router.post("/", addSkill);
router.patch("/:id", updateSkill);
router.delete("/:id", deleteSkill);

module.exports = router;
