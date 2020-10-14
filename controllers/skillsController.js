/* let skills = [{
    id: '1',
    title: 'Coding'
},
{
    id: '2',
    title: 'Complaining'
},
{
    id: '3',
    title: 'Procrastinating'
},
{
    id: '4',
    title: 'Improving'
},
{
    id: '5',
    title: 'Never giving up'
},
] */

/* const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/db.json')
const db = low(adapter) */

const db = require("../data/db-setup")



// routes for managing skills...

exports.getAllSkills = (req, res) => {
    let skills = db.get("skills").value()
    console.log("getAllSkills called");
    res.send(skills)
}

exports.getSkill = (req, res) => {
    const {
        id
    } = req.params
    const skill = db.get("skills").find({
        id
    }).value()
    console.log("getSkill called");
    if (!skill) {
        res.send(`No user with ${id}`)
    } else {
        res.send(skill)
    }
    /* let skill = skills.find(skill => skill.id == id) 
    res.send(skill)*/

}

exports.addSkill = (req, res) => {
    if (!req.body.title) {
        return res.send({
            error: "Please provide a title field!"
        })
    }
    let skillNew = {
        id: Date.now().toString(),
        ...req.body
    }

    console.log("addSkill called");
    /* skills.push(skillNew) */
    db.get("skills").push(skillNew).write()
    res.send(skillNew)
}

exports.updateSkill = (req, res) => {
    const {
        id
    } = req.params

    /* let skillToUpdate = skills.find(skill => skill.id == id) */
    /* Object.assign(skillToUpdate, {
        ...req.body
    })
    res.send(skillToUpdate) */

    let skillToUpdate = db.get("skills").find({
        id
    }).assign(req.body).write()
    res.send(skillToUpdate)
}

exports.deleteSkill = (req, res) => {
    const {
        id
    } = req.params

    /* let skill = skills.find(skill => skill.id == id) // find item to delete
    skills = skills.filter(skill => skill.id != id) // delete item by filtering it out
    res.send(skill) // return deleted item */

    let skillDeleted = db.get("skills").remove({
        id
    }).write()
    res.send(skillDeleted)

}