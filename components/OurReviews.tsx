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
import { WriteReviewButton } from '@/components/WriteReviewButtonComponent';

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
  time: number;
}

export const OurReviews = () => {
  const [businessData, setBusinessData] = useState<BusinessData>({
    name: "",
    rating: 5,
    reviews: [],
    user_ratings_total: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/reviews")
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

  const renderRatingIcons = (rating: number) => {
    const ratingIcons: React.ReactNode[] = [];
    const totalStars = 5;
    const numericRating = Number(rating);

    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(numericRating)) {
        ratingIcons.push(<CustomStarIcon key={i} filled={true} />);
      } else if (i === Math.ceil(numericRating) && numericRating % 1 !== 0) {
        ratingIcons.push(<CustomPointIcon key={i} />);
      } else {
        ratingIcons.push(<CustomStarIcon key={i} filled={false} />);
      }
    }

    return ratingIcons;
  };

  const sortedReviews = [...businessData.reviews].sort((a, b) => {
    const aTime = a.time;
    const bTime = b.time;
    return bTime - aTime; // newest first
  });

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
          <div className="flex flex-col justify-center items-center py-20">
            <div className="animate-spin rounded-full border-8 border-gray-200 border-t-red-1001 h-20 w-20 mb-4"></div>
            <h4 className="text-lg font-medium text-gray-600">Reviews are loading...</h4>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center shadow-lg p-8 rounded-[30px] text-center my-5 mb-12 bg-white"
                 style={{ minHeight: '400px' }}>
              <div className="relative w-48 h-48 mb-6">
                <Image
                    src="https://lh3.googleusercontent.com/p/AF1QipMoQqpjXG1OPkH7e1abfZY-0r9gXtGmFaCttGzT=s1360-w1360-h1020"
                    alt="Koreana Restaurant"
                    fill
                    className="rounded-full object-cover border-4 border-gray-50 shadow-md"
                />
              </div>
              <a
                  href="https://www.google.com/maps?cid=3259221795650919126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
              >
                <h2 className="text-3xl text-red-1001 font-bold mb-2">{businessData.name}</h2>
              </a>
              <div className="flex items-center justify-center mb-1">
                <span className="text-2xl text-orange-400 font-bold mr-2">{businessData.rating}</span>
                <div className="flex flex-row">{renderRatingIcons(businessData.rating)}</div>
              </div>
              <h5 className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-2">FROM GOOGLE</h5>
              <p className="text-gray-600 mb-6">
                Based on <span className="font-bold text-red-1001">{businessData.user_ratings_total}</span> reviews
              </p>
              <WriteReviewButton/>
            </div>
            <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              modules={[Pagination]}
              className="pb-12"
            >
              {sortedReviews.map((review, index) => (
                <SwiperSlide key={index} className="p-6 shadow-md rounded-2xl bg-white border border-gray-50 h-auto">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-16 w-16 mb-4">
                      <Image 
                        src={review.profile_photo_url} 
                        alt={review.author_name} 
                        fill
                        className="rounded-full object-cover shadow-sm" />
                    </div>
                    <a
                      href={review.author_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                      >
                        <h4 className="text-lg font-bold line-clamp-1">{review.author_name}</h4>
                      </a>
                    <div className="flex items-center justify-center gap-2 mt-1 mb-1"
                         aria-label={`${review.rating} out of 5 stars`}
                         >
                      <span className="text-sm font-semibold text-orange-400">{review.rating}</span>
                      <div className="flex flex-row">{renderRatingIcons(review.rating)}</div>
                    </div>

                      <p className="text-xs text-gray-400 mb-3">{review.relative_time_description}</p>
                      <p className="text-gray-600 text-sm italic line-clamp-4">
                        {review.text ? `"${review.text}"` : "No comment left."}
                      </p>
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
