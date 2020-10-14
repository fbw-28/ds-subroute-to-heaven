const express = require("express");
const app = express();
const todoRouter = require("./routes/todos");
const skillsRouter = require("./routes/skills");
const usersRouter = require("./routes/users");

// After server started, visit http://localhost:5000 in a browser to see the output.
app.listen(5002, () => {
  console.log("Example app listening on port 5000!");
});

app.use(express.json()); // parse incoming bodies... we can access then the data in req.body everywhere
app.use("/skills", skillsRouter);
app.use("/todos", todoRouter);
app.use("/users", usersRouter);
