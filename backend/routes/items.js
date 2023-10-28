const express = require("express");
const router = express.Router();
const itemsController = require("../controllers").items;

// router.get("/", casaDeDiscuriController.getAllCaseDeDiscuri);
router.post("/addItem", itemsController.addItem);

module.exports = router;
