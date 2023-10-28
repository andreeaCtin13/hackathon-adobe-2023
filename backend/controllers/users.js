const bcrypt = require("bcrypt");

const usersDb = require("../models").users;
// const ManeleDb = require("../models").Manele;

const controller = {
  getAllUsers: (req, res) => {
    usersDb
      .findAll()
      .then((users) => {
        res.status(200).send(users.map((user) => user.get()));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "SERVER ERROR" });
      });
  },

  addUser: async (req, res) => {
    const { mail, password, username } = req.body;
    //daca nu sunt in re.body sunt in req.param
    //info vine sub forma de json
    const hashedPassword = await bcrypt.hash(password, 10);

    await usersDb
      .create(
        await User.create({
          mail,
          username,
          password: hashedPassword,
        })
      )

      .then((user) => {
        res.status(201).send(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "EROARE LA ADAUGAREA USERULUI" });
      });
  },

  deleteUser: (req, res) => {
    const id = req.params.id;

    usersDb
      .destroy({
        where: {
          id: id,
        },
      })
      .then(() => {
        res.status(200).send("succes!");
      })
      .catch(() => {
        res.status(500).send("eroare!");
      });
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const newData = req.body;

    try {
      const [rowCount, [updatedUser]] = usersDb.update(newData, {
        where: { id: userId },
        returning: true,
      });

      if (rowCount === 0) {
        res.status(404).send("User not found.");
      } else {
        res.status(200).send(updatedUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error.");
    }
  },
};

module.exports = controller;
