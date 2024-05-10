'use client';

import React from 'react';
import { Link } from 'react-router-dom';

export const TableBook = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-4xl font-bold">
          Book <span className="text-blue-500">Your</span> Table!
        </h1>
        <p className="text-lg mt-4">
          Call (210)-804-0019 during business hours to reserve
        </p>
        <Link to="/menu" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          MENU
        </Link>
      </div>
    </div>
  );
}

export default TableBook;
