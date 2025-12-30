// import Image from "next/image";

import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="grid grid-cols-12 gap-3 px-5 md:px-16 py-10 mx-auto h-[70vh] max-w-490 *:relative">
      <div className="relative space-y-10 col-span-8 row-span-2 px-5 *:relative">
        <Image
          fill
          src="/images/poster-1.jpg"
          alt=""
          className="bg-contain rounded-lg z-0"
        />
        <h2 className="text-2xl text-white">جشنواره طعم های پاییزی</h2>
        <p className="text-white">
          تخفیف های ویژه روی بسته بندی های بزرگ و متن مضخرف <br /> فندق و بادوم
          هر هفته
        </p>
        <button className="bg-pink-500 text-white text-sm rounded-md px-4 py-2">
          همین حالا خرید کنید
        </button>
      </div>
      <div className="col-span-4 row-span-1">
        <Image
          fill
          src="/images/poster-2.jpg"
          alt=""
          className="bg-contain rounded-lg z-0"
        />
      </div>
      <div className="col-span-4 row-span-1">
        <Image
          fill
          src="/images/poster-3.jpg"
          alt=""
          className="bg-contain rounded-lg z-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
