const {Sequelize, DataTypes} = require("sequelize");

const database = require("../configs/database");

const Favorite = database.define("favorite", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Favorite;