"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const ProductsSlider: React.FC = () => {
  return (
    <section className="max-w-298.75 mx-auto px-3 my-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-4xl text-black font-light my-5">
          پر طرفدارترین محصولات
        </h2>
        <div className="flex items-center gap-2">
          <button className="swiper-button-next-custom cursor-pointer rounded-full border border-neutral-300 aspect-square p-2 rotate-180">
            <IoIosArrowBack size={20} />
          </button>
          <button className="swiper-button-prev-custom cursor-pointer rounded-full border border-neutral-300 aspect-square p-2">
            <IoIosArrowBack size={20} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletElement: "button",
        }}
        spaceBetween={24}
        breakpoints={{
          360: { slidesPerView: 2, spaceBetween: 10 },
          580: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4 },
        }}
        loop
        className="p-2! pb-10!"
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
