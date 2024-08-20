'use client';

import React from 'react';
import { MenuButton } from '@/components/MenuButtonComponent';

export const TableBook = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-4xl font-bold">
          Book <span className="text-red-1000">Your</span> Table!
        </h1>
        <p className="text-lg mt-4">
          Call (210)-804-0019 during business hours to reserve
        </p>
        <MenuButton/>
      </div>
    </div>
  );
}

export default TableBook;
