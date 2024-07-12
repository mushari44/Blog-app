const mongoose = require("mongoose");
const Blog = require("../model/Blog.js");
const Favorite = require("../model/Favorite.js");

const removeFavorite = async (req, res) => {
  const id = req.params.id;
  try {
    await Favorite.findOneAndDelete({ id });
    res.status(200).json({ message: "Favorite removed successfully" });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error removing favorite", error });
  }
};

const fetchFavoritesBlogs = async (req, res) => {
  try {
    const favorites = await Favorite.find({});
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorite blogs", error });
  }
};

const addToFavorites = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newlyFavoriteBlog = new Favorite({ id });

  try {
    await newlyFavoriteBlog.save();
    res.status(200).json({ newlyFavoriteBlog });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error adding to favorites", error });
  }
};

const fetchListOfBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

const addNewBlog = async (req, res) => {
  const { title, description, date } = req.body;
  const newlyCreateBlog = new Blog({ title, description, date });

  try {
    await newlyCreateBlog.save();
    res.status(200).json({ newlyCreateBlog });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error creating blog", error });
  }
};

const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({ message: "Unable to delete! Please try again", error });
  }
};

const updateABlog = async (req, res) => {
  const id = req.params.id;
  const { title, description, date } = req.body;

  try {
    const currentBlogToUpdate = await Blog.findByIdAndUpdate(
      id,
      { title, description, date },
      { new: true }
    );

    if (!currentBlogToUpdate) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ currentBlogToUpdate });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: "Something went wrong while updating! Please try again",
      error,
    });
  }
};

module.exports = {
  fetchListOfBlogs,
  deleteABlog,
  updateABlog,
  addNewBlog,
  fetchFavoritesBlogs,
  addToFavorites,
  removeFavorite,
};
