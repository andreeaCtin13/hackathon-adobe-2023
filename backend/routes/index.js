const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const itemsRouter = require("./items");
const usersRouter = require("./users");
const setsRouter = require("./sets");
const tradesRouter = require("./trades");

router.use("/", otherRouter);
router.use("/items", itemsRouter);
router.use("/users", usersRouter);
router.use("/sets", setsRouter);
router.use("/trades", tradesRouter);

module.exports = router;
