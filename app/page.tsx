import HeroSection from "@/app/_components/page_sections/landing/HeroSection";
import BrandBox from "@/app/_components/page_sections/landing/BrandBox";
import PopularCategories from "@/app/_components/page_sections/landing/PopularCategories";
import Gifts from "@/app/_components/page_sections/landing/Gifts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <Gifts />
      <BrandBox />
    </>
  );
}
