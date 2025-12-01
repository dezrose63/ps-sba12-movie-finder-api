require("dotenv").config();

const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// Use PORT from .env or default to 4000
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON (good habit even if not strictly needed yet)
app.use(express.json());

// Simple root route
app.get("/", (req, res) => {
  res.send("🎬 Movie Finder API is running");
});

// Mount movie routes under /api
// So /search becomes /api/search, /movies/:id becomes /api/movies/:id
app.use("/api", movieRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
