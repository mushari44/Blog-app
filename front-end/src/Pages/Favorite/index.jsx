import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { MdFavorite } from "react-icons/md";
export default function BlogContent() {
  const { favoritesBLogs, handleRemoveFavorite } = useContext(GlobalContext);
  return (
    <div className="relative z-0 flex items-center justify-center w-full ">
      <div className="m-5 mt-28 sm:mt-32 w-full">
        {favoritesBLogs.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {favoritesBLogs.map((blog) => (
              <li
                key={blog._id}
                id="product"
                className="border-4 border-gray-50 m-2 p-4 pb-2 shadow-2xl shadow-black/25 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div>
                  <div>
                    <h1 className="text-center text-2xl p-4 font-semibold ">
                      {blog.title}
                    </h1>
                    <span>created/updated at : {blog.date}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <textarea
                    readOnly={true}
                    name="description"
                    value={blog.description}
                    className="border p-2 mb-2 w-full h-40 resize-none outline-none cursor-default text-black"
                  />
                </div>
                <div className="flex justify-center mt-10 space-x-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleRemoveFavorite(blog._id)}
                      className=" bg-white/5 py-2 px-3 rounded hover:bg-slate-500 focus:outline-none "
                    >
                      <MdFavorite size={20} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-xl mt-20">Add to favorite Blogs</p>
        )}
      </div>
    </div>
  );
}
