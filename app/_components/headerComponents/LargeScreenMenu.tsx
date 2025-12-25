import { NavLink } from "../style/hooks";

const LargeScreenMenu: React.FC = () => {
  return (
    <ul className="flex items-center justify-center gap-8 xl:gap-16 [&>li]:cursor-pointer [&>li]:text-[16px] [&>li]:text-black [&>li]:font-bold">
      <li>
        <NavLink href="/">خانه</NavLink>
      </li>
      <li>
        <NavLink href="/subscription">اشتراک‌ها</NavLink>
      </li>
      <li>
        <NavLink href="/articles">مقالات</NavLink>
      </li>
      <li>
        <NavLink href="/market">فروشگاه</NavLink>
      </li>
      <li>
        <NavLink href="/about-us">درباره ما</NavLink>
      </li>
      <li>
        <NavLink href="/contact-us">تماس با ما</NavLink>
      </li>
    </ul>
  );
};

export default LargeScreenMenu;

{
  /* <li
  className="relative"
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
>
  <div className="flex items-center gap-2 group">
    <span>خدمات</span>

    <Image
      src="/images/arrow-left.png"
      width={20}
      height={20}
      alt="فلش باز و بسته بودن آکاردئون"
      className={`transition-transform duration-300 ${
        isHovering ? "rotate-180" : "rotate-0"
      }`}
    />
  </div>

  <div className="absolute min-w-full h-10 translate-x-12 bg-transparent w-40 pointer-events-auto"></div>

  <div
    className={` hidden
fixed right-1/2 translate-x-1/2
rounded-lg xlg:grid xlg:grid-cols-3 lg:grid-cols-[min-content_min-content_min-content_min-content]
gap-10 bg-white border border-neutral-300
z-40 transition-all duration-500 [&>a]:p-4
${
  isHovering
    ? "opacity-100 translate-y-10"
    : "opacity-0 translate-y-0 pointer-events-none"
}
`}
  >
    <Link
      href="/ava-college"
      className="flex items-start gap-4 w-full hover:bg-[#ECF7FA] hover:rounded-r-lg"
    >
      <div className="rounded-full bg-[#79B8F233] w-14 aspect-square flex items-center justify-center shrink-0">
        <Image
          width={35}
          height={35}
          src="/images/college.png"
          alt="سرویس آوا کالج"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <strong>آوا کالج</strong>
        <p className="min-w-42 text-sm text-neutral-500">
          انواع دوره‌های مدرن و تعاملی زبان های خارجی
        </p>
      </div>
    </Link>
    <Link
      href="/ava-lexis"
      className="flex items-start gap-4 w-full hover:bg-[#DEFFDE]"
    >
      <div className="rounded-full bg-[#38C02033] w-13 aspect-square flex items-center justify-center shrink-0">
        <Image
          width={35}
          height={35}
          src="/images/lexis.png"
          alt="سرویس آوا لکسیس"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <strong>آوا لکسیس</strong>
        <p className="min-w-42 text-sm text-neutral-500">
          اعجاب واژه آموزی با روش و ساختار شگفت انگیز
        </p>
      </div>
    </Link>
    <Link
      href="/ava-tube"
      className="flex items-start gap-4 w-full hover:bg-[#FFF0E8]"
    >
      <div className="rounded-full bg-[#FD5E6633] w-13 aspect-square flex items-center justify-center shrink-0">
        <Image
          width={35}
          height={35}
          src="/images/tube.png"
          alt="سرویس آوا تیوب"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <strong>آوا تیوب</strong>
        <p className="min-w-42 text-sm text-neutral-500">
          شبکه تعاملی ویدیوهای کوتاه از شبکه‌های اجتماعی
        </p>
      </div>
    </Link>
    <Link
      href="/ava-cinema"
      className="flex items-start gap-4 w-full hover:bg-[#FFF5EC] hover:rounded-l-lg"
    >
      <div className="rounded-full bg-[#FF931E33] w-13 aspect-square flex items-center justify-center shrink-0">
        <Image
          width={35}
          height={35}
          src="/images/cinema.png"
          alt="سرویس آوا سینما"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <strong>آوا سینما</strong>
        <p className="min-w-42 text-sm text-neutral-500">
          سینمای هوشمند و تعاملی با آموزش های سکانسی
        </p>
      </div>
    </Link>
  </div>
</li> */
}
