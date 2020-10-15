const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({
        users: [{
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
        ]
    })
    .write()

// routes for managing users...
// move us away from here please...

exports.getAllUsers = (req, res) => {
    let users = db.get("users").value()
    res.send(users);
};

exports.getUser = (req, res) => {
    const {
        id
    } = req.params; // We want to return the informatio of the user with id 007

    // find user with the given ID in the JSON file
    const user = db.get("users").find({
        id: id
    }).value()
    if (!user)
        res.send({
            err: `No user with id ${id}`
        });
    else {
        res.send(user);
    }
};


exports.addUser = (req, res) => {
    const user = req.body;

    // generate a unique ID for the new user
    user.id = Date.now().toString()

    // add user to the JSON file
    db.get("users").push(user).write()

    res.send(user);
};

exports.updateUser = (req, res) => {
    const {
        id
    } = req.params;
    const userData = req.body;

    console.log("ID: ", id)
    console.log("User data posted", userData)

    // update user in JSON file
    const user = db.get("users").find({
        id
    }).assign(userData).write()

    res.send({
        user,
        message: `User with id ${id} has been updated!`,
    });
};

exports.deleteUser = (req, res) => {
    const {
        id
    } = req.params;

    // delete user with given ID from JSON file
    let userDeleted = db.get("users").remove({
        id
    }).write()

    res.send({
        user: userDeleted,
        message: `User with id ${id} has been deleted!`,
    });
};