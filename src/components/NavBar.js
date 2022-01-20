import React from "react";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="flex justify-around items-center bg-white border-t-2 fixed bottom-0 w-full p-4 dark:bg-gray-900 dark:text-gray-400"
      style={{ fontSize: "1em" }}
    >
      <NavLink
        exact
        to="/"
        activeClassName="text-blue-500 cursor-pointer dark:text-red-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center">
          <AiOutlineHome className="text-5xl" />
        </div>
        <p>Home</p>
      </NavLink>
      <NavLink
        exact
        to="/search"
        activeClassName="text-blue-600 cursor-pointer  dark:text-red-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center ">
          <FiSearch className="text-5xl" />
        </div>
        <p> Search </p>
      </NavLink>
      <NavLink
        exact
        to="/popular"
        activeClassName="text-blue-600 cursor-pointer  dark:text-red-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center ">
          <AiOutlineHeart className="text-5xl" />
        </div>
        <p>Popular</p>
      </NavLink>
      <NavLink
        exact
        to="/upcoming"
        activeClassName="text-blue-600 cursor-pointer  dark:text-red-400"
        style={{ textDecoration: "none" }}
      >
        <div className="flex justify-center ">
          <AiOutlineCalendar className="text-5xl" />
        </div>
        <p>Upcoming</p>
      </NavLink>
    </div>
  );
}

export default NavBar;
