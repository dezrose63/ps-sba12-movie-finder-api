const express = require("express");
const router = express.Router();

// Import controller functions
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

// GET /api/search?title=batman
router.get("/search", searchMovies);

// GET /api/movies/:id
// example: /api/movies/tt0372784
router.get("/movies/:id", getMovieDetails);

module.exports = router;
