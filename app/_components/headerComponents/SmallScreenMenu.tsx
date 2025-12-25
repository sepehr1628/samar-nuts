import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface SmallScreenMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreenMenu: React.FC<SmallScreenMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.querySelector("body")?.classList.add("overflow-hide");
    } else {
      document.querySelector("body")?.classList.remove("overflow-hide");
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      id="small-screen-menu"
      className={`fixed top-0 bottom-0 right-0 w-4/5 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-white z-30 w-full h-full p-5 pb-3 shadow-xl overflow-y-auto">
        <button type="button" aria-label="بستن منو">
          <Image
            onClick={handleClick}
            width={28}
            height={28}
            src="/images/close-menu.png"
            alt="بستن منو"
          />
        </button>

        <ul className="space-y-6 mt-10 [&>li]:text-[1.1rem] [&>li]:bg-white [&>li]:pb-1">
          <li className="text-[16px]">
            <Link href="/" className="text-black block py-2">
              خانه
            </Link>
          </li>
          <li className="text-[16px]">
            <Link href="/subscription" className="text-black block py-2">
              اشتراک ها
            </Link>
          </li>
          <li className="text-[16px]">
            <Link href="/" className="text-black block py-2">
              مقالات
            </Link>
          </li>
          <li className="text-[16px]">
            <Link href="/" className="text-black block py-2">
              فروشگاه
            </Link>
          </li>
          <li className="text-[16px]">
            <Link href="/about-us" className="text-black block py-2">
              درباره ما
            </Link>
          </li>
          <li className="text-[16px]">
            <Link href="/contact-us" className="text-black block py-2">
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallScreenMenu;

{
  /* <li className="text-[16px] relative">
  <div
    className="text-black flex items-center gap-2 cursor-pointer py-2"
    onClick={handleServicesClick}
  >
    خدمات
    <span>
      <Image
        src="/images/arrow-left.png"
        width={20}
        height={20}
        alt="فلش باز و بسته بودن آکاردئون"
        className={`transition-all duration-300 ${
          isHovering ? "rotate-180" : "rotate-0"
        }`}
      />
    </span>
  </div>
  <div
    className={`transition-all duration-300 overflow-hidden ${
      isHovering ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
    }`}
  >
    <div className="rounded-l flex flex-col gap-7 p-6 pr-2">
      <Link
        href="/ava-cinema"
        className="flex items-start gap-4 w-full hover:bg-[#FFF0E8]"
      >
        <div className="rounded-full bg-[#79B8F233] w-12 aspect-square flex items-center justify-center shrink-0">
          <Image
            width={30}
            height={30}
            src="/images/cinema.png"
            alt="سرویس آوا سینما"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-black">آوا سینما</span>
          <p className="min-w-42 text-sm text-neutral-500">
            سینمای هوشمند و تعاملی با آموزش های سکانسی
          </p>
        </div>
      </Link>
      <Link
        href="/ava-tube"
        className="flex items-start gap-4 w-full hover:bg-[#ECF7FA]"
      >
        <div className="rounded-full bg-[#79B8F233] w-12 aspect-square flex items-center justify-center shrink-0">
          <Image
            width={30}
            height={30}
            src="/images/tube.png"
            alt="سرویس آوا تیوب"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-black">آوا تیوب</span>
          <p className="min-w-42 text-sm text-neutral-500">
            شبکه تعاملی ویدیوهای کوتاه از شبکه‌های اجتماعی
          </p>
        </div>
      </Link>
      <Link
        href="/ava-college"
        className="flex items-start gap-4 w-full hover:bg-[#ECF7FA]"
      >
        <div className="rounded-full bg-[#79B8F233] w-12 aspect-square flex items-center justify-center shrink-0">
          <Image
            width={30}
            height={30}
            src="/images/college.png"
            alt="سرویس آوا کالج"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="text-black">آوا کالج</span>
          <p className="min-w-42 text-sm text-neutral-500">
            انواع دوره‌های مدرن و تعاملی زبان های خارجی
          </p>
        </div>
      </Link>
    </div>
  </div>
</li> */
}
