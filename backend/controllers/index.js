const other = require("./other");
const users = require("./users");
const sets = require("./sets");
const items = require('./items');
const trades = require('./trades');

const controllers = {
  users,
  items,
  sets,
  trades,
  other,
};

module.exports = controllers;
