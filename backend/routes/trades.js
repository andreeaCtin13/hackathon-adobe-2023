const express = require("express");
const router = express.Router();
const tradesController = require("../controllers").trades;

// router.get("/", casaDeDiscuriController.getAllCaseDeDiscuri);
router.post("/addTrade", tradesController.addTrade);

module.exports = router;
