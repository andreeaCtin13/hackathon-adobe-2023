const express = require("express");
const router = express.Router();

const usersController = require("../controllers").users;

router.get("/getAllUsers", usersController.getAllUsers);
router.delete("/:id", usersController.deleteUser);
router.post("/addUser", usersController.addUser);
router.put('/updateUser:id', usersController.updateUser)

module.exports = router;
