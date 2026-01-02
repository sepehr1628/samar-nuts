import Image from "next/image";

const PopularCategories: React.FC = () => {
  return (
    <section
      className="max-w-490 mx-auto px-5 md:px-16"
      aria-label="دسته بندی‌های محبوبّ"
    >
      <div className="bg-white p-5 rounded-xl">
        <header className="flex items-center justify-start gap-3">
          <span className="px-0.5 py-4 rounded-sm bg-red-400"></span>
          <h2 className="font-semibold text-2xl">دسته بندی محبوب</h2>
        </header>
        <div className="flex items-center justify-evenly gap-5 flex-wrap mt-10 [&>div>strong]:text-lg">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/poster-3.jpg"
              alt=""
              width={120}
              height={120}
              className="rounded-full aspect-square w-20 xlg:w-35"
            />
            <strong>آجیل خام</strong>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/poster-3.jpg"
              alt=""
              width={120}
              height={120}
              className="rounded-full aspect-square w-20 xlg:w-35"
            />
            <strong>آجیل خام</strong>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/poster-3.jpg"
              alt=""
              width={120}
              height={120}
              className="rounded-full aspect-square w-20 xlg:w-35"
            />
            <strong>آجیل خام</strong>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/poster-3.jpg"
              alt=""
              width={120}
              height={120}
              className="rounded-full aspect-square w-20 xlg:w-35"
            />
            <strong>آجیل خام</strong>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/poster-3.jpg"
              alt=""
              width={120}
              height={120}
              className="rounded-full aspect-square w-20 xlg:w-35"
            />
            <strong>آجیل خام</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
