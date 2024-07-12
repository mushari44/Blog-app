import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import classNames from "classnames";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600); // Match this duration with your animation duration
  };

  return (
    <div
      className={classNames(
        "left-0 min-w-28 items-center justify-center top-2 ",
        {
          fixed: window.innerWidth <= 600,
        }
      )}
    >
      <div className="flex items-center justify-center mt-0">
        <button
          onClick={handleClick}
          className={`p-0 sm:p-1 rounded-full focus:outline-none focus:ring-2 transition-transform duration-300 ${
            isAnimating ? "animate-rotate" : ""
          }`}
        >
          {theme === "light" ? (
            <FaMoon className="text-gray-400 text-2xl md:text-4xl" />
          ) : (
            <FaSun className="text-yellow-300 md:text-4xl text-2xl" />
          )}
        </button>
      </div>
      <div>
        <span className="text-white md:text-base text-xs ">
          Switch to {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
};

export default ThemeToggle;
