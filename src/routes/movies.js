const express = require("express");

const router = express.Router();
const { bearer } = require("../middlewares/bearer");
const { checkUser } = require("../middlewares/checkUser");

const {
  getMoviesByTitle,
  getMoviesByUserFavorites,
  addMoviesToUserFavorites,
} = require("../controllers/movies");

router.get("/", (req, res) => {
  return res.status(403).json({
    message: "Forbidden",
  });
});

router.get("/favorites", bearer, checkUser, getMoviesByUserFavorites);

router.get("/:title", bearer, checkUser, getMoviesByTitle);

router.post("/favorites", bearer, checkUser, addMoviesToUserFavorites);

module.exports = router;
