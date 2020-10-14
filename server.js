const express = require('express');
const app = express();

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
app.get('/', (req,res) => {
  res.send("<h1>Welcome to our API</h1>")
})

// Hook in our sub APIs into our main API
// hook in routes
app.use('/todos', todosRouter)
app.use('/skills', skillsRouter)
app.use('/users', usersRouter)








