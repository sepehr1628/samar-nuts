import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const BrandBox: React.FC = () => {
  return (
    <section className="lg:row-span-2 order-3 lg:order-2 space-y-5">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h2 className="text-2xl">محصولات سمر</h2>
        <Link
          href="/"
          className="flex items-center text-sm gap-2 text-blue-700"
        >
          مشاهده همه محصولات
          <FaArrowLeftLong />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="flex flex-col">
          <Image
            src="/images/poster-1.jpg"
            alt=""
            className="w-full aspect-square rounded-t-2xl"
            width={200}
            height={200}
          />
          <div className="w-full bg-white p-2 rounded-b-2xl space-y-3">
            <p>مغز پسته 1 کیلوگرم</p>
            <div className="flex items-center gap-2">
              <span>{(540000).toLocaleString("fa-IR")}</span>
              تومان
            </div>
            <button className="flex items-center justify-center w-full gap-2 py-2 bg-neutral-200 text-sm text-[#a87532] rounded-lg">
              <FaShoppingCart color="#a87532" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/poster-3.jpg"
            alt=""
            className="w-full aspect-square rounded-t-2xl"
            width={200}
            height={200}
          />
          <div className="w-full bg-white p-2 rounded-b-2xl space-y-3">
            <p>مغز پسته 1 کیلوگرم</p>
            <div className="flex items-center gap-2">
              <span>{(540000).toLocaleString("fa-IR")}</span>
              تومان
            </div>
            <button className="flex items-center justify-center w-full gap-2 py-2 bg-neutral-200 text-sm text-[#a87532] rounded-lg">
              <FaShoppingCart color="#a87532" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/poster-2.jpg"
            alt=""
            className="w-full aspect-square rounded-t-2xl"
            width={200}
            height={200}
          />
          <div className="w-full bg-white p-2 rounded-b-2xl space-y-3">
            <p>مغز پسته 1 کیلوگرم</p>
            <div className="flex items-center gap-2">
              <span>{(540000).toLocaleString("fa-IR")}</span>
              تومان
            </div>
            <button className="flex items-center justify-center w-full gap-2 py-2 bg-neutral-200 text-sm text-[#a87532] rounded-lg">
              <FaShoppingCart color="#a87532" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/poster-4.jpg"
            alt=""
            className="w-full aspect-square rounded-t-2xl"
            width={200}
            height={200}
          />
          <div className="w-full bg-white p-2 rounded-b-2xl space-y-3">
            <p>مغز پسته 1 کیلوگرم</p>
            <div className="flex items-center gap-2">
              <span>{(540000).toLocaleString("fa-IR")}</span>
              تومان
            </div>
            <button className="flex items-center justify-center w-full gap-2 py-2 bg-neutral-200 text-sm text-[#a87532] rounded-lg">
              <FaShoppingCart color="#a87532" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/poster-5.jpg"
            alt=""
            className="w-full aspect-square rounded-t-2xl"
            width={200}
            height={200}
          />
          <div className="w-full bg-white p-2 rounded-b-2xl space-y-3">
            <p>مغز پسته 1 کیلوگرم</p>
            <div className="flex items-center gap-2">
              <span>{(540000).toLocaleString("fa-IR")}</span>
              تومان
            </div>
            <button className="flex items-center justify-center w-full gap-2 py-2 bg-neutral-200 text-sm text-[#a87532] rounded-lg">
              <FaShoppingCart color="#a87532" />
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandBox;
