import HeroSection from "@/app/_components/page_sections/landing/HeroSection";
import BrandBox from "@/app/_components/page_sections/landing/BrandBox";
import PopularCategories from "@/app/_components/page_sections/landing/PopularCategories";
import Gifts from "@/app/_components/page_sections/landing/Gifts";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <Gifts />
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] gap-5 p-5 md:px-16">
        <div className="w-full py-10 bg-red-400 order-1"></div>
        <BrandBox />
        <div className="w-full py-10 bg-green-400 order-2 lg:order-3"></div>
      </div>
    </>
  );
}
