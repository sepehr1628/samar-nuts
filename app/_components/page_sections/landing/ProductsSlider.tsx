"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const ProductsSlider: React.FC = () => {
  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={24}
        breakpoints={{
          360: { slidesPerView: 2, spaceBetween: 10 },
          580: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4 },
        }}
        loop
        className="max-w-298.75 p-2!"
      >
        <SwiperSlide className="separator-shadow rounded-2xl">
          <Image
            width={283}
            height={283}
            src="/images/تخمه-کدو-گوشتی-دو-آتشه.webp"
            alt="تخمه-کدو-گوشتی-دو-آتشه"
            className="rounded-t-2xl"
          />
          <div className="p-2 flex flex-col items-start gap-2 rounded-b-2xl">
            <strong>تخمه کدو گوشتی دو آتشه</strong>
            <div className="flex items-center flex-wrap gap-2 w-full [&>span]:rounded-full [&>span]:text-sm [&>span]:border [&>span]:border-neutral-300 [&>span]:py-0.5 [&>span]:px-1.5">
              <span>250 گرم</span>
              <span>250 گرم</span>
            </div>
            <p className="text-red-500">
              {(545000).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="separator-shadow rounded-2xl">
          <Image
            width={283}
            height={283}
            src="/images/تخمه-کدو-گوشتی-دو-آتشه.webp"
            alt="تخمه-کدو-گوشتی-دو-آتشه"
            className="rounded-t-2xl"
          />
          <div className="p-2 flex flex-col items-start gap-2 rounded-b-2xl">
            <strong>تخمه کدو گوشتی دو آتشه</strong>
            <div className="flex items-center flex-wrap gap-2 w-full [&>span]:rounded-full [&>span]:text-sm [&>span]:border [&>span]:border-neutral-300 [&>span]:py-0.5 [&>span]:px-1.5">
              <span>250 گرم</span>
              <span>250 گرم</span>
            </div>
            <p className="text-red-500">
              {(545000).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="separator-shadow rounded-2xl">
          <Image
            width={283}
            height={283}
            src="/images/تخمه-کدو-گوشتی-دو-آتشه.webp"
            alt="تخمه-کدو-گوشتی-دو-آتشه"
            className="rounded-t-2xl"
          />
          <div className="p-2 flex flex-col items-start gap-2 rounded-b-2xl">
            <strong>تخمه کدو گوشتی دو آتشه</strong>
            <div className="flex items-center flex-wrap gap-2 w-full [&>span]:rounded-full [&>span]:text-sm [&>span]:border [&>span]:border-neutral-300 [&>span]:py-0.5 [&>span]:px-1.5">
              <span>250 گرم</span>
              <span>250 گرم</span>
            </div>
            <p className="text-red-500">
              {(545000).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="separator-shadow rounded-2xl">
          <Image
            width={283}
            height={283}
            src="/images/تخمه-کدو-گوشتی-دو-آتشه.webp"
            alt="تخمه-کدو-گوشتی-دو-آتشه"
            className="rounded-t-2xl"
          />
          <div className="p-2 flex flex-col items-start gap-2 rounded-b-2xl">
            <strong>تخمه کدو گوشتی دو آتشه</strong>
            <div className="flex items-center flex-wrap gap-2 w-full [&>span]:rounded-full [&>span]:text-sm [&>span]:border [&>span]:border-neutral-300 [&>span]:py-0.5 [&>span]:px-1.5">
              <span>250 گرم</span>
              <span>250 گرم</span>
            </div>
            <p className="text-red-500">
              {(545000).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="separator-shadow rounded-2xl">
          <Image
            width={283}
            height={283}
            src="/images/تخمه-کدو-گوشتی-دو-آتشه.webp"
            alt="تخمه-کدو-گوشتی-دو-آتشه"
            className="rounded-t-2xl"
          />
          <div className="p-2 flex flex-col items-start gap-2 rounded-b-2xl">
            <strong>تخمه کدو گوشتی دو آتشه</strong>
            <div className="flex items-center flex-wrap gap-2 w-full [&>span]:rounded-full [&>span]:text-sm [&>span]:border [&>span]:border-neutral-300 [&>span]:py-0.5 [&>span]:px-1.5">
              <span>250 گرم</span>
              <span>250 گرم</span>
            </div>
            <p className="text-red-500">
              {(545000).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="separator-shadow rounded-2xl">
          <Image
            width={283}
            height={283}
            src="/images/تخمه-کدو-گوشتی-دو-آتشه.webp"
            alt="تخمه-کدو-گوشتی-دو-آتشه"
            className="rounded-t-2xl"
          />
          <div className="p-2 flex flex-col items-start gap-2 rounded-b-2xl">
            <strong>تخمه کدو گوشتی دو آتشه</strong>
            <div className="flex items-center flex-wrap gap-2 w-full [&>span]:rounded-full [&>span]:text-sm [&>span]:border [&>span]:border-neutral-300 [&>span]:py-0.5 [&>span]:px-1.5">
              <span>250 گرم</span>
              <span>250 گرم</span>
            </div>
            <p className="text-red-500">
              {(545000).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
