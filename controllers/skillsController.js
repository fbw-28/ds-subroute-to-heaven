const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({
        skills: [{
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
        ]
    })
    .write()


// routes for managing skills...
// move us away from here please...

exports.getAllSkills = (req, res) => {
    let skills = db.get("skills").value()
    res.send(skills);
};

exports.getSingleSkill = (req, res) => {
    const {
        id
    } = req.params
    let skill = db.get("skills").find(skill => skill.id == id)
    res.send(skill);
}

exports.addNewSkill = (req, res) => {
    if (!req.body.title) {
        return res.send({
            error: "Please provide a title field!"
        })
    }
    let skillNew = {
        id: Date.now().toString(),
        ...req.body
    }
    db.get("skills").push(skillNew).write()
    res.send(skillNew)
};

exports.updateSkill = (req, res) => {
    const {
        id
    } = req.params
    let skillToUpdate = db.get("skills").find(skill => skill.id == id)
    Object.assign(skillToUpdate, {
        ...req.body
    }).write()
    res.send(skillToUpdate)
}

exports.deleteSkill = (req, res) => {
    const {
        id
    } = req.params

    let skillDelete = db.get("skills").remove({
        id
    }).write()

    res.send({
        skill: skillDelete,
        message: `SKILL with ID ${id} has been deleted`
    }) // return deleted item
}