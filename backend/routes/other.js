const express = require("express");
const router = express.Router();
const otherController = require("../controllers").other;

router.get("/reset", (req, res) => {
    otherController.resetDb();

    res.status(200).send('ftewvjberkjn');
});
module.exports = router;
