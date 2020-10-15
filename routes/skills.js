const express = require('express');
// mini API for managing one resource only
const router = express.Router()

const {
    getAllSkills,
    getSingleSkill,
    addNewSkill,
    updateSkill,
    deleteSkill
} = require("../controllers/skillsController")

router.get('/', getAllSkills);
router.post('/', addNewSkill);
router.get('/:id', getSingleSkill);
router.patch('/:id', updateSkill);
router.delete('/:id', deleteSkill);

// // export our sub API
module.exports = router