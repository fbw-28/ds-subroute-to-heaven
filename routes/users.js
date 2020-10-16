const express = require("express");
const router = express.Router();

const controllers = require("../controllers/usersControllers");

const { getUsers, getUserById, postUser, patchUser, deleteUser } = controllers;

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", postUser);

router.patch("/:id", patchUser);

router.delete("/:id", deleteUser);

module.exports = router;
