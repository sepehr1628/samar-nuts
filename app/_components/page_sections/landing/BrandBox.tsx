import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

const BrandBox: React.FC = () => {
  return (
    <section className="flex items-center justify-center flex-wrap gap-20 p-10 pb-15">
      <div>
        <Image
          src="/images/poster-1.jpg"
          alt=""
          className="w-60 h-55 rounded-t-2xl"
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
      <div>
        <Image
          src="/images/poster-3.jpg"
          alt=""
          className="w-60 h-55 rounded-t-2xl"
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
      <div>
        <Image
          src="/images/poster-2.jpg"
          alt=""
          className="w-60 h-55 rounded-t-2xl"
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
      <div>
        <Image
          src="/images/poster-4.jpg"
          alt=""
          className="w-60 h-55 rounded-t-2xl"
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
      <div>
        <Image
          src="/images/poster-5.jpg"
          alt=""
          className="w-60 h-55 rounded-t-2xl"
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
    </section>
  );
};

export default BrandBox;
