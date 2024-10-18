'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CustomStarIcon } from '@/components/CustomStarIcon';
import { CustomPointIcon } from '@/components/CustomPointIcon';

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
  const [resultOnPage] = useState(3);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0); // Initialize to 0 or a default width

  useEffect(() => {
    // Ensure window object is available
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const resizeListener = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set up event listener for window resize
      window.addEventListener('resize', resizeListener);

      // Clean up
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }
  }, []);

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

  const renderRatingIcons = (rating) => {
    const ratingIcons = [];

    if (Number.isInteger(rating)) {
      // Render star icons for whole number ratings
      for (let i = 1; i < 5; i++) {
        // @ts-ignore
        ratingIcons.push(<CustomStarIcon key={i} filled={i <= rating}/>);
      }
    } else {

      // Calculate the number of filled and empty icons for point ratings
      // todo: revisit this nonsense; just an edge case handling logic
      const filledIcons = Math.floor(rating);
      const decimalPart = rating - filledIcons;
      const emptyIcons = 5 - filledIcons - (decimalPart > 0 ?  1: 0);

      for (let i = 0; i < filledIcons; i++) {
        // @ts-ignore
        ratingIcons.push(<CustomStarIcon key={`filled-${i}`} filled={true} />);
      }

      if (decimalPart > 0) {
        // @ts-ignore
        ratingIcons.push(<CustomPointIcon key="point-icon" />);
      }

      for (let i = 0; i < emptyIcons; i++) {
        // @ts-ignore
        ratingIcons.push(<CustomStarIcon key={`empty-${i}`} filled={false} />);
      }
    }

    return ratingIcons;
  };


  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold">
          Customer <span className="text-red-1001">Reviews</span>
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
            <div className="flex flex-col items-center shadow-lg p-5 rounded-[20px] text-center my-2.5 mb-[47px]"
                 style={{height: 'calc(100% - 40px)'}}>
              <Image
                  src="https://lh3.googleusercontent.com/p/AF1QipMoQqpjXG1OPkH7e1abfZY-0r9gXtGmFaCttGzT=s1360-w1360-h1020"
                  alt="Place main"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"

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
              </div>
              <div className="flex flex-row">{renderRatingIcons(businessData.rating)}</div>
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
                    <Image 
                      src={review.profile_photo_url} 
                      alt="User profile" 
                      width={500}
                      height={500}
                      className="rounded-full h-12 w-12" />
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
