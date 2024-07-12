import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function BlogContent() {
  const {
    blogs,
    handleDeleteBlog,
    handleEdit,
    handleSave,
    handleChange,
    editId,
    editedTitle,
    editedDescription,
    handleCancel,
  } = useContext(GlobalContext);
  return (
    <div className="flex items-center justify-center w-full">
      <div className="m-5 w-full">
        {blogs.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <li
                key={blog._id}
                id="product"
                className="border-4 border-gray-50 m-2 p-4 pb-2 shadow-2xl shadow-black/25 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div>
                  {editId === blog._id ? (
                    <input
                      type="text"
                      name="title"
                      value={editedTitle}
                      onChange={handleChange}
                      className="border p-2 mb-2 w-full text-lg font-semibold outline-none text-black"
                      placeholder="Enter the Title"
                    />
                  ) : (
                    <div>
                      <h1 className="text-center text-2xl p-4 font-semibold ">
                        {blog.title}
                      </h1>
                      <span>created/updated at : {blog.date}</span>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <textarea
                    readOnly={editId !== blog._id}
                    name="description"
                    value={
                      editId === blog._id ? editedDescription : blog.description
                    }
                    onChange={handleChange}
                    className="border p-2 mb-2 w-full h-40 resize-none outline-none text-black"
                    placeholder="Enter the description"
                  />
                </div>
                <div className="flex justify-center mt-10 space-x-4">
                  {editId === blog._id ? (
                    <div className="flex space-x-2">
                      <button
                        className="bg-green-500 py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={() => handleSave(blog._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-red-500 py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 py-2 px-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => handleEdit(blog._id)}
                      >
                        <FaEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="bg-red-500 py-2 px-3 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-xl mt-20">No blogs available.</p>
        )}
      </div>
    </div>
  );
}
