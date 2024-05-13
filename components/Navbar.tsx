'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import logo from "../public/logo.png";
import { navbarLinks } from "@/lib/links";

export const Navbar = () => {
  const router = useRouter(); // Use useRouter instead of useLocation
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-5 flex justify-between items-center">
      <Link href="/">
        <a>
          <div className="flex items-center">
            <Image 
              src={logo} 
              alt="Website logo" 
              className="h-10" 
              width={100}
              height={100}
            />
          </div>
        </a>
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
        {navbarLinks.map(link => (
          <Link key={link.href} href={link.href}>
            <a className={`px-3 py-2 rounded ${router.pathname === link.href ? "bg-blue-500 text-white" : "text-gray-700"}`}>
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;