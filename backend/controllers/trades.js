const tradesDB = require("../models").trades;

const controller = {
  addTrade: (req, res) => {
    const { id_set_1, id_owner_1, id_set_2, id_owner_2, status_trade, date } =
      req.body;

    tradesDB
      .create({
        id_set_1,
        id_owner_1,
        id_set_2,
        id_owner_2,
        status_trade,
        date,
      })
      .then((trade) => {
        res.status(201).send(trade);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "EROARE LA ADAUGAREA TRADE-ULUI" });
      });
  },
  getAllTrades: (req, res) => {
    return tradesDB
      .findAll()
      .then((trades) => {
        res.status(200).send(trades.map((trade) => trade.get()));
      })
      .catch(() => {
        return "eroare!";
      });
  },
};

module.exports = controller;
