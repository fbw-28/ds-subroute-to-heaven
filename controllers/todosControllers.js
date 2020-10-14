let todos = [
  { id: "1", name: "Wake the cat", done: false },
  { id: "2", name: "Make a Corona Test", done: false },
  { id: "3", name: "Trim off your neighbours beard", done: true },
  {
    id: "4",
    name: "Learn to meditate and become one with the backend",
    done: false,
  },
];

exports.getAllTodos = (req, res) => {
  res.send(todos);
};

exports.getTodo = (req, res) => {
  const { id } = req.params;
  let todo = todos.find((todo) => todo.id == id);
  res.send(todo);
};

exports.addTodo = (req, res) => {
  if (!req.body.name) {
    return res.send({ error: "Please provide a name field!" });
  }
  let todoNew = { id: Date.now().toString(), ...req.body };
  todos.push(todoNew);
  res.send(todoNew);
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  let todo = todos.find((todo) => todo.id == id);
  Object.assign(todo, { ...req.body });
  res.send(todo);
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  let todo = todos.find((todo) => todo.id == id); // find item to delete
  todos = todos.filter((todo) => todo.id != id); // delete item by filtering it out
  res.send(todo); // return deleted item
};
