'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface BusinessData {
  name: string;
  rating: number;
  reviews: Review[];
  user_ratings_total: string;
}

interface Review {
  profile_photo_url: string;
  author_url: string;
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

export const OurReviews = () => {
  const [businessData, setBusinessData] = useState<BusinessData>({
    name: "",
    rating: 5,
    reviews: [],
    user_ratings_total: "",
  });
  const [resultOnPage, setResultOnPage] = useState(3);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 800) {
        setResultOnPage(1);
      } else if (windowWidth < 1250) {
        setResultOnPage(2);
      } else {
        setResultOnPage(3);
      }
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [windowWidth]);

  useEffect(() => {
    axios.get("https://koreana.restaurant/reviews/")
      .then((response) => {
        const { name, rating, reviews, user_ratings_total } = response.data.result;
        setLoading(false);
        setBusinessData({
          name,
          rating,
          reviews,
          user_ratings_total,
        });
      })
      .catch((error) => {
        console.error("Error fetching business details and reviews:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold">
          Customer <span className="text-blue-500">Reviews</span>
        </h1>
        <p className="text-lg mt-2">What Our Customer Say About Us</p>
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
            <h4 className="text-lg">Reviews are loading...</h4>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMoQqpjXG1OPkH7e1abfZY-0r9gXtGmFaCttGzT=s1360-w1360-h1020"
                alt="Place main"
                className="rounded-lg"
              />
              <a
                href="https://www.google.com/maps?cid=3259221795650919126"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <h1 className="text-2xl font-bold">{businessData.name}</h1>
              </a>
              <div className="flex items-center mt-2">
                <h3 className="text-xl">{businessData.rating}</h3>
                {/* Render rating icons here */}
              </div>
              <h5 className="text-sm uppercase tracking-wide">FROM GOOGLE</h5>
              <p>
                Based on <span className="font-bold">{businessData.user_ratings_total}</span> reviews
              </p>
            </div>
            <Swiper
              slidesPerView={resultOnPage}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="my-4"
            >
              {businessData.reviews.map((review, index) => (
                <SwiperSlide key={index} className="p-4 shadow-lg rounded-lg">
                  <div className="flex flex-col items-center">
                    <img src={review.profile_photo_url} alt="User profile" className="rounded-full h-12 w-12" />
                    <a
                      href={review.author_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <h4 className="text-lg font-bold">{review.author_name}</h4>
                      </a>
                      <p className="text-sm">{review.relative_time_description}</p>
                      <p className="text-md mt-2">{review.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default OurReviews;