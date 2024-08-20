'use client';

import React from 'react';
import Image from 'next/image';
import storyImage1 from "../public/our-story-1.jpeg";
import storyImage2 from "../public/our-story-2.jpeg";

export const OurStory = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 p-4" data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
          <Image src={storyImage1} alt="Story" className="rounded-lg shadow-lg" style={{ width: 'auto', height: 'auto' }} />
          <Image src={storyImage2} alt="Story" className="mt-4 rounded-lg shadow-lg" style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className="w-full md:w-1/2 p-4" data-aos="fade-left" data-aos-duration="2000">
          <h3 className="text-3xl font-bold">
            OUR <span className="text-red-1000">STORY</span>
          </h3>
          <h1 className="text-5xl font-bold mt-2">
            Family-Owned Korean Restaurant Serving San Antonio For Over 25 Years.
          </h1>
          <p className="mt-4 text-lg">
            A Korean restaurant located in the northeast of San Antonio.
            Recently under new management, the restaurant is now owned and
            operated by Mira Kim. The restaurant prides itself on providing
            customers with an authentic taste of Korean cuisine. Whether you{'\''}re
            a seasoned Korean food enthusiast or trying it for the first time,
            the team at Koreana is dedicated to ensuring that you have a
            memorable and enjoyable dining experience. Come and enjoy a taste of
            Korea in San Antonio!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;