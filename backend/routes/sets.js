const express = require("express");
const router = express.Router();
const setsController = require("../controllers").sets;

// router.get("/", casaDeDiscuriController.getAllCaseDeDiscuri);
router.post("/addSet", setsController.addSet);

module.exports = router;
