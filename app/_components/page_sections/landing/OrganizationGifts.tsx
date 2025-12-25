"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const OrganizationGifts: React.FC = () => {
  return (
    <section className="bg-amber-300 py-10 px-5 my-10">
      <div className="flex items-center gap-5 max-w-289.75 mx-auto">
        <div>
          <h2 className="text-2xl md:text-4xl text-center font-light my-5 leading-12">
            پک های متنوع <br /> هدیه های سازمانی
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
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
        ></Swiper>
      </div>
    </section>
  );
};

export default OrganizationGifts;
