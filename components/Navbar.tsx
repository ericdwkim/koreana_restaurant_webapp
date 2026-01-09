'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter
import logo from "../public/restaurant_koreana_logo.svg";
import { navbarLinks } from "@/lib/links";

export const Navbar = () => {
  const pathname = usePathname();
  const [isActiveMobile, setIsActiveMobile] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-5 flex justify-between items-center relative">
      <Link href="/" className="flex items-center">
        <Image 
          src={logo} 
          alt="Website logo" 
          className="h-10 w-auto" 
        />
      </Link>
      <div className="md:hidden">
        <svg
          onClick={() => setIsActiveMobile(!isActiveMobile)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d={isActiveMobile ? "M6 18L18 6M6 6l12 12" : "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"}
          />
        </svg>
      </div>
      <div className={`${isActiveMobile ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50 py-4 md:py-0 transition-all duration-300 ease-in-out`}>
        {navbarLinks.map(link => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={`px-3 py-2 mx-1 my-1 md:my-0 rounded font-medium transition-colors ${pathname === link.href ? "bg-red-1001 text-white" : "text-gray-700 hover:text-red-1001"}`}
            onClick={() => setIsActiveMobile(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;