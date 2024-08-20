'use client';

import React from 'react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
      <div className="relative text-white py-32 px-10">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('/menu-hero.jpg')` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">
            Welcome to Koreana Restaurant where Seoul meets Food
          </h1>
          <p className="text-xl mt-5">
              Most authentic Korean cuisine you{'\''}ll ever experience
          </p>
          <Link href="/menu" className="mt-10 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            MENU
          </Link>
        </div>
      </div>
  );
}

export default HeroSection;
