import { Link } from "react-router-dom";
import ThemeToggle from "../light-dark-mode/ThemeToggle";
export default function NavBar() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black animate-gradient-x py-4 shadow-2xl  w-full">
      <nav className="flex flex-col items-center justify-center h-32 max-w-6xl mx-auto space-y-1 sm:flex-row sm:space-y-0 sm:justify-between sm:h-20">
        <ThemeToggle />

        <Link to={"/"}>
          <div className="text-center sm:text-left ">
            <h1
              id="title"
              className="min-h-16 font-bold text-white text-2xl sm:text-3xl md:text-5xl cursor-pointer tracking-tight transition-transform transform hover:scale-105 hover:text-gray-300"
            >
              Blog App
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-white font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-400">
              Home
            </li>
          </Link>
          <Link to={"/create"}>
            <li className="cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-400">
              Add Blog
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
