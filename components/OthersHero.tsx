'use client';

import React from 'react';

interface OthersHeroProps {
    heroTitle: string;
    heroDescription: string;
}

export const OthersHero = ({ heroTitle, heroDescription }: OthersHeroProps) => {
    return (
        <div className="relative text-white py-20 px-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('/menu-hero.jpg')` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            {/* Content */}
            <div className="relative z-20 container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center">{heroTitle}</h1>
                <p className="text-lg mt-4 text-center">{heroDescription}</p>
            </div>
        </div>
    );
}

export default OthersHero;
