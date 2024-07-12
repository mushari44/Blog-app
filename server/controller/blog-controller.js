const mongoose = require("mongoose");
const Blog = require("../model/Blog");

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

  const newlyCreateBlog = new Blog({
    title,
    description,
    date,
  });

  try {
    await newlyCreateBlog.save();
    return res.status(200).json({ newlyCreateBlog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating blog", error });
  }
};

const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    return res
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

    return res.status(200).json({ currentBlogToUpdate });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating! Please try again",
      error,
    });
  }
};

module.exports = { fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog };
