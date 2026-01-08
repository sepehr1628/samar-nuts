import HeroSection from "@/app/_components/page_sections/landing/HeroSection";
import BrandBox from "@/app/_components/page_sections/landing/BrandBox";
import PopularCategories from "@/app/_components/page_sections/landing/PopularCategories";
import Gifts from "@/app/_components/page_sections/landing/Gifts";
import { Fragment } from "react/jsx-runtime";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <Gifts />
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] gap-5 p-5 md:px-16">
        <div className="relative w-full py-10 order-1 rounded-xl tea cursor-pointer">
          <div className="group absolute inset-0 transition-all duration-400 rounded-xl hover:backdrop-blur-xs flex flex-col gap-5 items-center justify-center hover:w-full hover:h-full overflow-hidden">
            <p className="text-white text-[0px] group-hover:text-3xl transition-all duration-300">
              چای گیلان
            </p>
            <Link
              href="/"
              className="translate-x-100 group-hover:translate-x-0 text-white transition-all duration-500 bg-amber-900 rounded-md px-4 py-2"
            >
              مشاهده
            </Link>
          </div>
        </div>
        <BrandBox />
        <div className="relative w-full py-10 order-2 lg:order-3 rounded-xl rice">
          <div className="group absolute inset-0 transition-all duration-400 rounded-xl hover:backdrop-blur-xs flex flex-col gap-5 items-center justify-center hover:w-full hover:h-full overflow-hidden">
            <p className="text-white text-[0px] group-hover:text-3xl transition-all duration-300">
              برنج گیلان
            </p>
            <Link
              href="/"
              className="translate-x-100 group-hover:translate-x-0 text-white transition-all duration-500 bg-amber-900 rounded-md px-4 py-2"
            >
              مشاهده
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
