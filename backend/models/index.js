const Sequelize = require("sequelize");
const db = require("../config/db");

const usersModel = require("./users");
const itemsModel = require("./items");
const setsModel = require('./sets');
const tradesModel = require('./trades');

const users = usersModel(db, Sequelize);
const items = itemsModel(db, Sequelize);
const sets = setsModel(db, Sequelize);
const trades = tradesModel(db, Sequelize);

users.hasMany(items);
items.belongsTo(users);


module.exports = {
  users,
  items,
  sets,
  trades,
  connection: db, //de akm inainte cand ne referim la db, ne referim la conexiune
};
