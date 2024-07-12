import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { handleAddBlog } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBlog(title, description);
    setTitle("");
    setDescription("");
    navigate("/"); // Navigate to home page after adding blog
  };

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div
        className=" shadow-md rounded-lg w-full max-w-lg p-6 mb-24"
        id="product"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Add Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className=" text-sm font-medium ">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="mt-1 text-black block min-w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium ">
              Description
            </label>
            <textarea
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter blog description"
              className=" text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-indigo-600 hover:bg-indigo-700  py-2 px-4 rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
