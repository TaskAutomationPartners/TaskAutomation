import React from "react";
import Icon from "../icons/icon";
import { Link } from "@remix-run/react";

type Props = {};

export default function NavBar({}: Props) {

  /*   function navLinks() {
    if (pathname.includes("login") || pathname.includes("dash")) {
      return <Link to="/">Home</Link>;
    } else {
      return (
        <>
          <a href="#about">About</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </>
      );
    }
  } */
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a href="/">Home</a></li>

            <li>
              <a href="/login">Sign In</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          {" "}
          <Icon
            icon="TapWhiteLogo"
            width={40}
            height={40}
          />
      <Icon
            icon="TapLogoTextWhiteLargert"
            width={120}
            height={40}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/*  <li>
            <a>Item 1</a>
          </li> */}
          {/*   <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link to="/login" className="btn">
          Sign In
        </Link>
      </div>
    </div>
  );
}
