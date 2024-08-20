'use client';

import React from 'react';

interface OthersHeroProps {
  heroTitle: string;
  heroDescription: string;
}

export const OthersHero = ({ heroTitle, heroDescription }: OthersHeroProps) => {
  return (
    <div className="bg-gray-200 text-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800">{heroTitle}</h1>
        <p className="text-lg mt-4 text-gray-600">{heroDescription}</p>
      </div>
    </div>
  );
}

export default OthersHero;