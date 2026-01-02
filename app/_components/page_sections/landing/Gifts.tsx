import GiftsSlider from "@/app/_components/page_sections/landing/GiftsSlider";
import { GoGift } from "react-icons/go";

const Gifts: React.FC = () => {
  return (
    <section className="bg-[#e3be83f0] p-5 md:px-16 my-20 md:my-40">
      <div className="max-w-490 mx-auto flex flex-col xlg:flex-row items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <GoGift size={100} color="#fff" />
          <h2>بسته‌های کادویی سازمانی</h2>
        </div>
        <GiftsSlider />
      </div>
    </section>
  );
};

export default Gifts;
