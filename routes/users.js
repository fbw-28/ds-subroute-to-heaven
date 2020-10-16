const express = require("express");
const router = express.Router();

const controllers = require("../controllers/usersControllers");

const { getUsers, getUserById, postUser, patchUser, deleteUser } = controllers;

let users = [
  { id: "1", username: "user1", password: "pw1" },
  { id: "2", username: "user2", password: "pw2" },
  { id: "3", username: "user3", password: "pw3" },
];

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", postUser);

router.patch("/:id", patchUser);

router.delete("/:id", deleteUser);

module.exports = router;
