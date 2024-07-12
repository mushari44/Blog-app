import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [favoritesBLogs, setFavoritesBLogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      fetchFavorites();
    }
  }, [blogs]);

  async function fetchBlogs() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  }

  async function fetchFavorites() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/favorites");
      const favorites = response.data;

      const favoriteBlogIds = favorites.map((fav) => fav.id);
      const favoriteBlogs = blogs.filter((blog) =>
        favoriteBlogIds.includes(blog._id)
      );

      setFavoritesBLogs(favoriteBlogs);
    } catch (error) {
      console.log("Error fetching favorites:", error);
    }
  }

  const handleAddFavorite = async (blogId) => {
    try {
      await axios.post(
        `http://127.0.0.1:5000/api/favorites/addToFavorites/${blogId}`
      );
      fetchFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFavorite = async (blogId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:5000/api/favorites/removeFavorite/${blogId}`
      );
      fetchFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddBlog = async (title, description) => {
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    try {
      await axios.post(
        "https://blog--server-f3dbd17cdd52.herokuapp.com/api/blogs/add",
        {
          title,
          description,
          date,
        }
      );
      fetchBlogs();
    } catch (error) {
      console.log("Error adding blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(
        `https://blog--server-f3dbd17cdd52.herokuapp.com/api/blogs/delete/${id}`
      );
      handleRemoveFavorite(id);
      fetchBlogs();
    } catch (error) {
      console.log("Error deleting blog:", error);
    }
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog._id === id);
    setEditId(id);
    setEditedTitle(blogToEdit.title);
    setEditedDescription(blogToEdit.description);
  };

  const handleSave = async (id) => {
    try {
      const newTitle = editedTitle;
      const newDescription = editedDescription;
      const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });

      await axios.put(
        `https://blog--server-f3dbd17cdd52.herokuapp.com/api/blogs/update/${id}`,
        {
          title: newTitle,
          description: newDescription,
          date: date,
        }
      );

      fetchBlogs();
      handleCancel();
    } catch (error) {
      console.log("Error saving blog:", error);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditedTitle("");
    setEditedDescription("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setEditedTitle(value);
    } else if (name === "description") {
      setEditedDescription(value);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        blogs,
        handleAddBlog,
        handleDeleteBlog,
        handleEdit,
        handleSave,
        handleChange,
        editId,
        editedTitle,
        editedDescription,
        handleCancel,
        fetchBlogs,
        favoritesBLogs,
        handleAddFavorite,
        fetchFavorites,
        handleRemoveFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
