"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const GiftsSlider: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        // spaceBetween={24}
        breakpoints={{
          300: { slidesPerView: 1.5, spaceBetween: 10 },
          500: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3.7, spaceBetween: 16 },
          1024: { slidesPerView: 4.5, spaceBetween: 24 },
        }}
        loop
        className="w-full px-2.5! md:px-16 flex items-center"
      >
        <SwiperSlide className="bg-red-400">اسلاید اول</SwiperSlide>
        <SwiperSlide className="bg-red-400">اسلاید اول</SwiperSlide>
        <SwiperSlide className="bg-red-400">اسلاید اول</SwiperSlide>
        <SwiperSlide className="bg-red-400">اسلاید اول</SwiperSlide>
        <SwiperSlide className="bg-red-400">اسلاید اول</SwiperSlide>
        <SwiperSlide className="bg-red-400">اسلاید اول</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GiftsSlider;
