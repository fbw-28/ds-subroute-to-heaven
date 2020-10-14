/* let todos = [{
        id: '1',
        name: 'Wake the cat',
        done: false
    },
    {
        id: '2',
        name: 'Make a Corona Test',
        done: false
    },
    {
        id: '3',
        name: 'Trim off your neighbours beard',
        done: true
    },
    {
        id: '4',
        name: 'Learn to meditate and become one with the backend',
        done: false
    }
] */

const db = require("../data/db-setup")

// routes for managing TODOS...

exports.getAllTodos = (req, res) => {
    let todos = db.get("todos").value()
    console.log("getAllTodos called");
    res.send(todos)
}

exports.getTodos = (req, res) => {
    const {
        id
    } = req.params
    /*  let todo = todos.find(todo => todo.id == id) */
    let todo = db.get("todos").find({
        id
    }).value()
    res.send(todo)
}

exports.addTodos = (req, res) => {
    if (!req.body.name) {
        return res.send({
            error: "Please provide a name field!"
        })
    }
    let todoNew = {
        id: Date.now().toString(),
        ...req.body
    }
    /* todos.push(todoNew) */
    db.get("todos").push(todoNew).write()
    res.send(todoNew)
}

exports.updateTodos = (req, res) => {
    const {
        id
    } = req.params
    /* let todo = todos.find(todo => todo.id == id)
    Object.assign(todo, {
        ...req.body
    })
    res.send(todo) */

    let todoToUpdate = db.get("todos").find({
        id
    }).assign(req.body).write()
    res.send(todoToUpdate)
}

exports.deleteTodos = (req, res) => {
    const {
        id
    } = req.params

    let todoDeleted = db.get("todos").remove({
        id
    }).write()
    res.send(todoDeleted)
    /*  let todo = todos.find(todo => todo.id == id) // find item to delete
     todos = todos.filter(todo => todo.id != id) // delete item by filtering it out
     res.send(todo) // return deleted item */
}