import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../light-dark-mode/ThemeContext";
import ThemeToggle from "../light-dark-mode/ThemeToggle";

const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`bg-gradient-to-r fixed z-10 ${
        theme === "light"
          ? "from-gray-800 via-gray-600 to-gray-400 "
          : "from-black via-gray-800 to-black "
      } animate-gradient-x py-4 shadow-2xl w-full`}
    >
      <nav className="flex flex-col items-center justify-center h-12 max-w-6xl mx-auto space-y-2 sm:flex-row sm:space-y-0 sm:justify-between sm:h-20">
        <ThemeToggle />
        <Link to={"/"}>
          <div className="text-center sm:text-left  sm:w-full ">
            <h1
              id="title"
              className={`sm:min-h-16 font-bold text-white text-2xl sm:text-3xl md:text-5xl cursor-pointer tracking-tight transition-transform transform hover:scale-105 hover:text-${
                theme === "light" ? "gray-300" : "gray-400"
              }`}
            >
              Blog App
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-white font-semibold">
          <Link
            to={"/"}
            className={`hover:text-${
              theme === "light" ? "gray-400" : "gray-500"
            }`}
          >
            <li className="cursor-pointer transition-transform transform hover:scale-110">
              Home
            </li>
          </Link>
          <Link
            to={"/create"}
            className={`hover:text-${
              theme === "light" ? "gray-400" : "gray-500"
            }`}
          >
            <li className="cursor-pointer transition-transform transform hover:scale-110">
              Add Blog
            </li>
          </Link>
          <Link
            to={"/favorites"}
            className={`hover:text-${
              theme === "light" ? "gray-400" : "gray-500"
            }`}
          >
            <li className="cursor-pointer transition-transform transform hover:scale-110">
              Favorites
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
