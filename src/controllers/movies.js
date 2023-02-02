const User = require("../models/User");
const Favorite = require("../models/Favorite");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const axios = require("axios");
const pino = require("pino")();

const getMoviesByTitle = async (req, res) => {
  try {
    pino.info("GET - /movies/:title");
    let title = req.params.title;
    let movies = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`
    );
    if (movies.data.Response != "True") {
      return res.status(200).json({
        message: "No movies found",
      });
    }
    return res.status(200).json({
      url: movies.data.Poster,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getMoviesByUserFavorites = async (req, res) => {
  try {
    pino.info("GET - /movies/favorites");
    let data = await Favorite.findAll({
      where: {
        user_id: req._user_id,
      },
    });
    if (data.length === 0) {
      return res.status(200).json({
        message: "The user has no favorites",
      });
    }
    let movies = data.map((movie) => {
      return movie.title;
    })
    return res.status(200).json({
      movies,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addMoviesToUserFavorites = async (req, res) => {
  try {
    pino.info("POST - /movies/favorites");
    let title = req.body.title;
    let movies = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`
    );
    if (movies.data.Response != "True") {
      return res.status(200).json({
        message: "No movies found",
      });
    }
    let movieTitle = movies.data.Title;
    // search for user_id and title in Favrites
    let dataExist = await Favorite.findOne({
      where: {
        user_id: req._user_id,
        title: movieTitle,
      },
    });
    if (dataExist) {
      return res.status(200).json({
        message: "The movie already exists in favorites",
      });
    }
    let data = await Favorite.create({
      user_id: req._user_id,
      title: movies.data.Title,
    });
    return res.status(200).json({
      message: "The movie was added to favorites",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMoviesByTitle,
  getMoviesByUserFavorites,
  addMoviesToUserFavorites,
};
