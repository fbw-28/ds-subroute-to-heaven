const express = require('express');
const app = express();

const users = require("./routes/users");
const todos = require("./routes/todos");
const skills = require("./routes/skills");

// After server started, visit http://localhost:5000 in a browser to see the output.
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

// Middlewares
app.use(express.json()) 
app.use("/users", users);
app.use("/todos", todos);
app.use("/skills", skills);



