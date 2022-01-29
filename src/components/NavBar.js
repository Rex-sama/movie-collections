import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoDesktopOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavBar({ darkMode, setDarkMode }) {
  const changeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className="flex justify-around items-center text-sm bg-white border-t-2 fixed bottom-0 w-full p-2 dark:bg-gray-900 dark:text-gray-400">
      <NavLink
        exact
        to="/"
        activeClassName="text-blue-500 cursor-pointer dark:text-green-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center">
          <AiOutlineHome className="text-3xl" />
        </div>
        <p>Home</p>
      </NavLink>
      <NavLink
        exact
        to="/search"
        activeClassName="text-blue-600 cursor-pointer  dark:text-green-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center ">
          <FiSearch className="text-3xl" />
        </div>
        <p> Search </p>
      </NavLink>
      <NavLink
        exact
        to="/tv-shows"
        activeClassName="text-blue-600 cursor-pointer  dark:text-green-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center ">
          <IoDesktopOutline className="text-3xl" />
        </div>
        <p>TV shows</p>
      </NavLink>

      <div onClick={changeMode}>
        {darkMode ? (
          <>
            <div className="flex justify-center ">
              <BsFillMoonStarsFill className="text-3xl" />
            </div>
            <p>Dark</p>
          </>
        ) : (
          <>
            <div className="flex justify-center ">
              <FaSun className="text-3xl" />
            </div>
            <p>Light</p>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
