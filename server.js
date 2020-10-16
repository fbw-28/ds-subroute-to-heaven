const express = require('express');
const app = express();
const morgan = require("morgan")

// Database

const db = require("./db/lowDbSetup");
// db.defaults().write();


const todosRoute = require("./routes/todos")
const skillsRoute = require("./routes/skills")
const usersRoute = require("./routes/users");

// After server started, visit http://localhost:5000 in a browser to see the output.
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

app.use(express.json()) // parse incoming bodies... we can access then the data in req.body everywhere
app.use(morgan('dev'))

// Router
app.use("/todos", todosRoute);
app.use("/skills", skillsRoute);
app.use("/users", usersRoute);

app.get('/', (req, res) => {
  res.send("<h1>Welcome to our API</h1>")
})

