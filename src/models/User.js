const { Sequelize, DataTypes } = require("sequelize");

const database = require("../configs/database");

const User = database.define("user", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: false,
});

module.exports = User;
