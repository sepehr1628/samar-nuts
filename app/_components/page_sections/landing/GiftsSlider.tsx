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
        spaceBetween={24}
        breakpoints={{
          300: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3.7 },
          1024: { slidesPerView: 4.5 },
        }}
        loop
        className="w-full px-2.5! md:px-16 flex items-center"
      >
        <SwiperSlide>اسلاید اول</SwiperSlide>
        <SwiperSlide>اسلاید اول</SwiperSlide>
        <SwiperSlide>اسلاید اول</SwiperSlide>
        <SwiperSlide>اسلاید اول</SwiperSlide>
        <SwiperSlide>اسلاید اول</SwiperSlide>
        <SwiperSlide>اسلاید اول</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GiftsSlider;
