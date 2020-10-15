const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({
        todos: [{
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
        ]
    })
    .write()

// routes for managing TODOS...
// move us away from here please...

exports.getAllTodos = (req, res) => {
    let todos = db.get("todos").value()
    res.send(todos)
};

exports.getSingleTodo = (req, res) => {
    const {
        id
    } = req.params

    let todo = db.get("todos").find(todo => todo.id == id).value()
    res.send(todo)
}

exports.addNewTodo = (req, res) => {

    let todoNew = {
        id: Date.now().toString(),
        ...req.body
    }
    db.get("todos").push(todoNew).write()
    res.send(todoNew)
};

exports.updateTodo = (req, res) => {
    const {
        id
    } = req.params
    let todo = db.get("todos").find(todo => todo.id == id)
    Object.assign(todo, {
        ...req.body
    }).write()
    res.send(todo)
}

exports.deleteTodo = (req, res) => {
    const {
        id
    } = req.params
    let todoDelete = db.get("todos").remove({
        id
    }).write()
    res.send({
        todo: todoDelete,
        message: `TODO with ID ${id} has been deleted`
    }) // return deleted item
}