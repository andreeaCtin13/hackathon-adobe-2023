const setDb= require("../models").sets;
const itemsDb = require("../models").items;

const controller =
{
    buildSet: (req, res) => {
        const { iduri } = req.body;
        if (!iduri)
        {
            res.status(400).send({message: "Trebuie introduse items pentru trade!"});
        }
        let dePusInBaza=[];
        for (let i=0;i<idArray.length;i++)
        {
            if (items.getStatusItem(iduri[i])==='disponibil')
                dePusInBaza.push(iduri[i]);
            else
                res.status(400).send({message: "Unul din iteme nu este disponibil"});
        }
        dePusInBaza.sort();
        let text=''+dePusInBaza.map(a => String(a)+',').concat(); // ATENTIE aici trimite un string de id-uri separate prin virgula
        // res.status(200).send(text);
        setDb.create(text)
        .then(() => {
            res.status(200).send('Ai creat cu succes set-ul');
        })
        .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "EROARE LA ADAUGAREA SET-ULUI" });
          });
    },

    addSet: (req, res) => {
        const { items } = req.body;
        //daca nu sunt in re.body sunt in req.param
        //info vine sub forma de json
    
        setDb.create({ items })
          .then((set) => {
            res.status(201).send(set);
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ message: "EROARE LA ADAUGAREA TRADE-ULUI" });
          });
    }
};

module.exports = controller;