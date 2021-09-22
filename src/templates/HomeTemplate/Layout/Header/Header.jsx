import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";

export default function Header(props) {
  return (
    <div>
      <header className="p-4 bg-opacity-40 bg-black fixed top-0 w-full z-50">
        <div className="container flex justify-between mx-auto h-10">
          <NavLink
            to="/home"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
              alt="..."
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/home"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
                activeClassName="border-b-2 border-red-500"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/contact"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
                activeClassName="border-b-2 border-red-500"
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/news"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-500"
                activeClassName="border-b-2 border-red-500"
              >
                News
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button
              className="self-center px-8 py-3 rounded text-white"
              onClick={() => {
                history.push("/login");
              }}
            >
              Sign in
            </button>
            <button className="self-center px-8 py-3 font-semibold rounded text-white">
              Sign up
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
