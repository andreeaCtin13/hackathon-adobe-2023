const itemsDB = require("../models").items;

const controller = {

    addItem: (req, res) => {
        const { idOwner, status, denumire, descriere, picture, locatie } = req.body;
        //daca nu sunt in re.body sunt in req.param
        //info vine sub forma de json
    
        itemsDB.create({ idOwner, status, denumire, descriere, picture, locatie })
          .then((item) => {
            res.status(201).send(item);
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "EROARE LA ADAUGAREA ITEMULUI" });
          });
      }

}

module.exports = controller;