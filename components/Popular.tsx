'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import popularImage1 from '../public/most-popular-1.jpg';
import popularImage2 from '../public/most-popular-2.jpg';
import popularImage3 from '../public/most-popular-3.jpg';
import popularImage4 from '../public/most-popular-4.jpg';
import popularImage5 from '../public/most-popular-5.jpg';
import Image from 'next/image';

export const Popular = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800" data-aos="fade-up" data-aos-duration="1500">
          Popular <span className="text-red-1001">Items</span>
        </h1>
        <p className="text-lg mt-4 text-gray-600" data-aos="fade-up" data-aos-duration="2000">
          These are some of the most popular items that you will find on our menu.
        </p>
      </div>
      <div className="mt-8" data-aos="fade-up" data-aos-duration="2500">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container !py-10"
        >
          <SwiperSlide className="relative !w-[280px] !h-[280px] sm:!w-[400px] sm:!h-[400px]">
            <Image src={popularImage1} alt="Popular Item 1" fill className="rounded-2xl object-cover shadow-lg" />
          </SwiperSlide>
          <SwiperSlide className="relative !w-[280px] !h-[280px] sm:!w-[400px] sm:!h-[400px]">
            <Image src={popularImage2} alt="Popular Item 2" fill className="rounded-2xl object-cover shadow-lg" />
          </SwiperSlide>
          <SwiperSlide className="relative !w-[280px] !h-[280px] sm:!w-[400px] sm:!h-[400px]">
            <Image src={popularImage3} alt="Popular Item 3" fill className="rounded-2xl object-cover shadow-lg" />
          </SwiperSlide>
          <SwiperSlide className="relative !w-[280px] !h-[280px] sm:!w-[400px] sm:!h-[400px]">
            <Image src={popularImage4} alt="Popular Item 4" fill className="rounded-2xl object-cover shadow-lg" />
          </SwiperSlide>
          <SwiperSlide className="relative !w-[280px] !h-[280px] sm:!w-[400px] sm:!h-[400px]">
            <Image src={popularImage5} alt="Popular Item 5" fill className="rounded-2xl object-cover shadow-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Popular;