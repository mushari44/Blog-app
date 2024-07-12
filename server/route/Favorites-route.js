const express = require("express");
const favoritesRouter = express.Router();
const {
  fetchFavoritesBlogs,
  addToFavorites,
  removeFavorite,
} = require("../controller/blog-controller");

favoritesRouter.get("/", fetchFavoritesBlogs);
favoritesRouter.post("/addToFavorites/:id", addToFavorites);
favoritesRouter.delete("/removeFavorite/:id", removeFavorite); 

module.exports = favoritesRouter;
