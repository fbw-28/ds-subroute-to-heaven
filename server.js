const express = require('express');
const app = express();

const db = require("./data/db-setup")

db.defaults({
  skills: [
    {
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
  ],
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
    },
  ],
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
  ],
}).write()

//import sub APIs
const todosRouter = require("./routes/todos")
const skillsRouter = require("./routes/skills")
const usersRouter = require("./routes/users")

//middleware
app.use(express.json()) // parse incoming bodies... we can access then the data in req.body everywhere

// After server started, visit http://localhost:5000 in a browser to see the output.
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

//start page
app.get('/', (req, res) => {
  res.send("<h1>Welcome to our API</h1>")
})

// Hook in our sub APIs into our main API
// hook in routes
app.use('/todos', todosRouter)
app.use('/skills', skillsRouter)
app.use('/users', usersRouter)