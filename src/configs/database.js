const { Sequelize } = require("sequelize");

const database = new Sequelize("nodebv", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = database;