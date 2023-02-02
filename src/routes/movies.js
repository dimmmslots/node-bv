const express = require("express");

const router = express.Router();

const {
  getMoviesByTitle,
  getMoviesByUserFavorites,
  addMoviesToUserFavorites,
} = require("../controllers/movies");

router.get("/favorites", getMoviesByUserFavorites);

router.get("/:title", getMoviesByTitle);

router.post("/favorites", addMoviesToUserFavorites);

module.exports = router;
