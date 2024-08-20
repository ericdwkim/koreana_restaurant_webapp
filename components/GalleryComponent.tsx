'use client';

import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Image from "next/image";

interface Image {
  original: string;
  thumbnail: string;
}

export const GalleryComponent = () => {
  const folderPath = "/"; // Replace with your folder path

  const imagePaths = [
    "o.jpg", "o-1.jpg", "o-2.jpg", "o-3.jpg", "o-4.jpg", "o-5.jpg",
    "o-6.jpg", "o-7.jpg", "o-8.jpg", "o-9.jpg", "o-10.jpg", "o-11.jpg",
    "o-12.jpg", "o-13.jpg", "o-14.jpg", "o-15.jpg", "o-16.jpg", "o-17.jpg",
    "o-18.jpg", "o-19.jpg", "o-20.jpg", "o-21.jpg", "o-22.jpg", "o-23.jpg",
    "o-24.jpg", "o-25.jpg", "o-26.jpg", "o-27.jpg", "o-28.jpg", "o-29.jpg",
    "o-30.jpg", "o-31.jpg", "o-32.jpg", "o-33.jpg", "o-34.jpg",
  ];

  const galleryImages: Image[] = imagePaths.map((path) => ({
    original: folderPath + path,
    thumbnail: folderPath + path,
  }));

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setCurrentIndex(null);
    setShowGallery(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        {imagePaths.map((path, index) => (
          <Image
            key={index}
            src={folderPath + path}
            width={500}
            height={500}
            alt={`${index}`}
            className="cursor-pointer"
            onClick={() => handleImageClick(index)}
          />
        ))}
        {showGallery && currentIndex !== null && (
          <div>
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <span
                className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                onClick={handleCloseGallery}
              >
                &times;
              </span>
              <Image
                src={galleryImages[currentIndex].original}
                width={1000}
                height={1000}
                alt={`${currentIndex}`}
                className="object-cover object-center"
              />
            </div>
            <ImageGallery
              items={galleryImages}
              startIndex={currentIndex}
              showFullscreenButton={true}
              showPlayButton={true}
              showBullets={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryComponent;

