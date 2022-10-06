import { Link } from "react-router-dom";
import React, { useState } from "react";
const NavBar = (props) => {
  

  return (
    <div style={props.style} className="my-6 rounded">
      
      <nav
        id="header"
        className="w-full z-30  py-1  shadow-lg border-b  "
      >
        <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline hover:text-yellow-400  font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/business"
                  >
                    business
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-yellow-400 font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/entertainment"
                  >
                    entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-yellow-400 font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/general"
                  >
                    general
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-yellow-400 font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/health"
                  >
                    health
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline hover:text-yellow-400 font-medium text-lg py-2 px-4 lg:-ml-2"
                    to="/sports"
                  >
                    sports
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar