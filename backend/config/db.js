//aici creez legatura cu baza de date si utilizez sequalize

const Sequelize = require("sequelize");
//importam o clasa, d aia are litera mare

const sequelize = new Sequelize("bd_hackathon", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    //aici putem da optiuni bazei de date in sine
    timestamps: true,
  },
  port: 7777
});
//asta e o instanta a clasei

module.exports = sequelize;
