const axios = require("axios");

const OMDB_BASE_URL = "http://www.omdbapi.com/";

// GET /api/search?title=batman
// Uses query parameter: title
async function searchMovies(req, res) {
  const { title } = req.query;

  // Validation: title is required
  if (!title) {
    return res
      .status(400)
      .json({ error: "Title query parameter is required" });
  }

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // OMDb uses Response: "False" for errors/no results
    if (response.data.Response === "False") {
      return res
        .status(404)
        .json({ error: response.data.Error || "No movies found" });
    }

    // Send back just the list of movies
    return res.json(response.data.Search);
  } catch (error) {
    console.error("Error searching movies:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to fetch movies from OMDb" });
  }
}

// GET /api/movies/:id
// Uses route param: id (IMDb ID)
async function getMovieDetails(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res
        .status(404)
        .json({ error: response.data.Error || "Movie not found" });
    }

    // Send the full movie detail object
    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    return res
      .status(500)
      .json({ error: "Failed to fetch movie details from OMDb" });
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
};
