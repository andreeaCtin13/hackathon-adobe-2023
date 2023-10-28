const tradesDB = require("../models").trades;

const controller = {

    addTrade: (req, res) => {
        const { id_set_1, id_owner_1, id_set_2, id_owner_2, status_trade, date } = req.body;
        //daca nu sunt in re.body sunt in req.param
        //info vine sub forma de json
    
        tradesDB.create({ id_set_1, id_owner_1, id_set_2, id_owner_2, status_trade, date })
          .then((trade) => {
            res.status(201).send(trade);
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "EROARE LA ADAUGAREA TRADE-ULUI" });
          });
      }

}

module.exports = controller;