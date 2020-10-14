/* let users = [{
    id: '1',
    username: 'user1',
    password: 'pw1'
},
{
    id: '2',
    username: 'user2',
    password: 'pw2'
},
{
    id: '3',
    username: 'user3',
    password: 'pw3'
},
]  */

const db = require("../data/db-setup")
// routes for managing users...

exports.getAllUsers = (req, res) => {
    let users = db.get("users").value()
    console.log("getAllUsers called");
    res.send(users)
}

exports.getUser = (req, res) => {
    const {
        id
    } = req.params
    /* let user = users.find(user => user.id == id) */
    let user = db.get("users").find({
        id
    }).value()
    res.send(user)
}

exports.addUser = (req, res) => {
    if (!req.body.username) {
        return res.send({
            error: "Please provide a username field!"
        })
    }
    let userNew = {
        id: Date.now().toString(),
        ...req.body
    }
    /* users.push(userNew) */
    db.get("users").push(userNew).write()
    res.send(userNew)
}

exports.updateUser = (req, res) => {
    const {
        id
    } = req.params
    /* let userToUpdate = users.find(user => user.id == id) 
    Object.assign(userToUpdate, {
        ...req.body
    })*/
    let userToUpdate = db.get("users").find({
        id
    }).assign(req.body).write()

    res.send(userToUpdate)
}

exports.deleteUser = (req, res) => {
    const {
        id
    } = req.params
    let deletedUser = db.get("users").remove({
        id
    }).write()
    res.send(deletedUser)
    /* let user = users.find(user => user.id == id) // find item to delete
    users = users.filter(user => user.id != id) // delete item by filtering it out
    res.send(user) // return deleted item */
}