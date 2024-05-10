'use client';

import React, { useState } from "react";
import Image from 'next/image';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo-Korean-Resturent.png";

export const Navbar = () => {
  const location = useLocation();
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-5 flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center">
          <Image 
            src={logo} 
            alt="Website logo" 
            className="h-10" 
            width={100}
            height={100}
          />
        </div>
      </Link>
      <svg
        onClick={() => setIsActiveMobile(!isActiveMobile)}
        className="h-6 w-6 cursor-pointer md:hidden"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
      <div className={`md:flex hidden ${isActiveMobile ? "flex" : "hidden"} flex-col md:flex-row items-center`}>
        <Link to="/" className={`px-3 py-2 rounded ${location.pathname === "/" ? "bg-blue-500 text-white" : "text-gray-700"}`}>
          HOME
        </Link>
        <Link to="/menu" className={`px-3 py-2 rounded ${location.pathname === "/menu" ? "bg-blue-500 text-white" : "text-gray-700"}`}>
          MENU
        </Link>
        <Link to="/about" className={`px-3 py-2 rounded ${location.pathname === "/about" ? "bg-blue-500 text-white" : "text-gray-700"}`}>
          ABOUT
        </Link>
        <Link to="/gallery" className={`px-3 py-2 rounded ${location.pathname === "/gallery" ? "bg-blue-500 text-white" : "text-gray-700"}`}>
          GALLERY
        </Link>
        <Link to="/contact" className={`px-3 py-2 rounded ${location.pathname === "/contact" ? "bg-blue-500 text-white" : "text-gray-700"}`}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;