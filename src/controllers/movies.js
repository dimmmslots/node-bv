const User = require("../models/User");
const Favorite = require("../models/Favorite");
const dotenv = require("dotenv").config();

const getMoviesByTitle = async (req, res) => {
    return res.json({ 
        message: "getMoviesByTitle",
        env: process.env.TEST,
    });
}

const getMoviesByUserFavorites = async (req, res) => {}

const addMoviesToUserFavorites = async (req, res) => {}

module.exports = {
    getMoviesByTitle,
    getMoviesByUserFavorites,
    addMoviesToUserFavorites,
};