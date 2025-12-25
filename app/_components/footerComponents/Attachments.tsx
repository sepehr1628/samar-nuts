import Link from "next/link";

const Attachments: React.FC = () => {
  return (
    <div className="flex flex-wrap [&>div]:w-fit gap-x-20 md:gap-x-28 gap-y-10 md:row-span-2 col-span-7 xlg:col-span-9">
      <div className="flex flex-col gap-5">
        <h2 className="text-base text-black">آوا لینگو</h2>
        <ul className="flex flex-col gap-5 [&>li]:text-sm text-[#8C8D8E]">
          <li>خانواده آوالینگو</li>
          <li>فرصت های شغلی</li>
          <li>
            <Link href="/policy-rules">قوانین و مقررات</Link>
          </li>
          <li>
            <Link href="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-base text-black">خدمات</h2>
        <ul className="flex flex-col gap-5 [&>li]:text-sm text-[#8C8D8E]">
          <li>آوا کالج</li>
          <li>آوا لکسیس</li>
          <li>
            <Link href="/ava-tube">آوا تیوب</Link>
          </li>
          <li>
            <Link href="/ava-cinema">آوا سینما</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-base text-black">دوره‌های آموزشی</h2>
        <ul className="flex flex-col gap-5 [&>li]:text-sm text-[#8C8D8E]">
          <li>دوره‌های تعاملی</li>
          <li>دوره‌های آنلاین</li>
          <li>دوره‌های حضوری</li>
          <li>بسته‌های خودآموز</li>
          <li>کافه مکالمه</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-base text-black">زبان ها</h2>
        <ul className="flex flex-col gap-5 [&>li]:text-sm text-[#8C8D8E]">
          <li>انگلیسی</li>
          <li>ترکی استانبولی</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-base text-black">راهنما و پشتیبانی</h2>
        <ul className="flex flex-col gap-5 [&>li]:text-sm text-[#8C8D8E]">
          <li>
            <Link href="/help-center">مرکز راهنما</Link>
          </li>
          <li>پشتیبانی</li>
        </ul>
      </div>
    </div>
  );
};

export default Attachments;
