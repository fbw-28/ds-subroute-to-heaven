const express = require("express");
const router = express.Router();

let users = [
    { id: '1', username: 'user1', password: 'pw1'},
    { id: '2', username: 'user2', password: 'pw2'},
    { id: '3', username: 'user3', password: 'pw3'},
  ]

  router.get('/', (req, res) => {
    res.send(users)
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params
    let user = users.find(user => user.id == id)
    res.send(user)
  })
  
  router.post('/', (req, res) => {
    if(!req.body.username) {
      return res.send({error: "Please provide a username field!"})
    }
    let userNew = { id: Date.now().toString(), ...req.body }
    users.push(userNew)
    res.send(userNew)
  });
  
  router.patch('/:id', (req, res) => {
    const { id } = req.params
    let userToUpdate = users.find(user => user.id == id)
    Object.assign(userToUpdate, {...req.body})
    res.send(userToUpdate)
  })
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params
    let user = users.find(user => user.id == id) // find item to delete
    users = users.filter(user => user.id != id) // delete item by filtering it out
    res.send(user) // return deleted item
  })
  
  

module.exports = router;