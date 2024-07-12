import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  async function fetchBlogs() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

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
      await axios.post("http://127.0.0.1:5000/api/blogs/add", {
        title,
        description,
        date,
      });
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleDeleteBlog(id) {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/blogs/delete/${id}`);
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  }

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

      await axios.put(`http://127.0.0.1:5000/api/blogs/update/${id}`, {
        title: newTitle,
        description: newDescription,
        date: date,
      });

      fetchBlogs();
      handleCancel();
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
