const express = require('express');
const app = express();

// After server started, visit http://localhost:5000 in a browser to see the output.
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

app.use(express.json()) // parse incoming bodies... we can access then the data in req.body everywhere

let todos = [
  { id: '1', name: 'Wake the cat', done: false },
  { id: '2', name: 'Make a Corona Test', done: false },
  { id: '3', name: 'Trim off your neighbours beard', done: true },
  { id: '4', name: 'Learn to meditate and become one with the backend', done: false }
]

let skills = [
  { id: '1', title: 'Coding'}, 
  { id: '2', title: 'Complaining'}, 
  { id: '3', title: 'Procrastinating'}, 
  { id: '4', title: 'Improving'}, 
  { id: '5', title: 'Never giving up'}, 
]

let users = [
  { id: '1', username: 'user1', password: 'pw1'},
  { id: '2', username: 'user2', password: 'pw2'},
  { id: '3', username: 'user3', password: 'pw3'},
]

// routes for managing TODOS...
  // move us away from here please...

app.get('/todos', (req, res) => {
  res.send(todos)
});

app.get('/todos/:id', (req, res) => {
  const { id } = req.params
  let todo = todos.find(todo => todo.id == id)
  res.send(todo)
})

app.post('/todos', (req, res) => {
  if(!req.body.name) {
    return res.send({error: "Please provide a name field!"})
  }
  let todoNew = { id: Date.now().toString(), ...req.body }
  todos.push(todoNew)
  res.send(todoNew)
});

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params
  let todo = todos.find(todo => todo.id == id)
  Object.assign(todo, {...req.body})
  res.send(todo)
})

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  let todo = todos.find(todo => todo.id == id) // find item to delete
  todos = todos.filter(todo => todo.id != id) // delete item by filtering it out
  res.send(todo) // return deleted item
})


// routes for managing skills...
  // move us away from here please...

app.get('/skills', (req, res) => {
  res.send(skills)
});

app.get('/skills/:id', (req, res) => {
  const { id } = req.params
  let skill = skills.find(skill => skill.id == id)
  res.send(skill)
})

app.post('/skills', (req, res) => {
  if(!req.body.title) {
    return res.send({error: "Please provide a title field!"})
  }
  let skillNew = { id: Date.now().toString(), ...req.body }
  skills.push(skillNew)
  res.send(skillNew)
});

app.patch('/skills/:id', (req, res) => {
  const { id } = req.params
  let skillToUpdate = skills.find(skill => skill.id == id)
  Object.assign(skillToUpdate, {...req.body})
  res.send(skillToUpdate)
})

app.delete('/skills/:id', (req, res) => {
  const { id } = req.params
  let skill = skills.find(skill => skill.id == id) // find item to delete
  skills = skills.filter(skill => skill.id != id) // delete item by filtering it out
  res.send(skill) // return deleted item
})


// routes for managing users...
  // move us away from here please...

app.get('/users', (req, res) => {
  res.send(users)
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params
  let user = users.find(user => user.id == id)
  res.send(user)
})

app.post('/users', (req, res) => {
  if(!req.body.username) {
    return res.send({error: "Please provide a username field!"})
  }
  let userNew = { id: Date.now().toString(), ...req.body }
  users.push(userNew)
  res.send(userNew)
});

app.patch('/users/:id', (req, res) => {
  const { id } = req.params
  let userToUpdate = users.find(user => user.id == id)
  Object.assign(userToUpdate, {...req.body})
  res.send(userToUpdate)
})

app.delete('/users/:id', (req, res) => {
  const { id } = req.params
  let user = users.find(user => user.id == id) // find item to delete
  users = users.filter(user => user.id != id) // delete item by filtering it out
  res.send(user) // return deleted item
})

