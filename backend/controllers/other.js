// aici se adauga ruta de reset si alte chestii care sunt prea mici sa aiba propriile lor controllere

const connection = require("../models").connection;

const controller = {
  resetDb: (req, res) => {
    //pe req vine info de la user la baza de date
    //pe res pleaca informatia inapoi la user

    console.log("a ajuns aici2");
    //metoda asta sincronizeaza bd cu modelel deja formate si metoda are mai multe optiuni
    connection
      .sync({
        force: true, //asta e una din optiuni, fortam crearea modelelor chiar daca sunt anumite warning uri
      })
      .then(
        //intra aici daca sync a functionat
        () =>
          res.status(201).send({
            message: "Baza de date a fost resetata",
          })
        //201 - a fost realizata cu succes actualizarea
      )
      .catch((err) => {
        //intra daca sync ul nu a reusit
        console.log(err);
        res.status(500).send({ message: "Eroare la resetarea bazei de date" });
      });
  },
};

module.exports = controller;
