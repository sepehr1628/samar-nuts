import Image from "next/image";
import Link from "next/link";

const ProductsCategory: React.FC = () => {
  return (
    <section
      aria-label="دسته بندی محصولات"
      className="max-w-298.75 mx-auto flex items-center justify-center flex-wrap lg:flex-nowrap gap-10 py-10"
    >
      <div>
        <Link href="/">
          <Image
            src="/images/آجیل.webp"
            alt=""
            width={283}
            height={197}
            className="hover:scale-125 transition-transform duration-500"
          />
        </Link>
      </div>
      <div>
        <Link href="">
          <Image
            src="/images/خشکبار.webp"
            alt=""
            width={283}
            height={197}
            className="hover:scale-125 transition-transform duration-500"
          />
        </Link>
      </div>
      <div>
        <Link href="/">
          <Image
            src="/images/شکلات.webp"
            alt=""
            width={283}
            height={197}
            className="hover:scale-125 transition-transform duration-500"
          />
        </Link>
      </div>
      <div>
        <Link href="/">
          <Image
            src="/images/تنقلات.webp"
            alt=""
            width={283}
            height={197}
            className="hover:scale-125 transition-transform duration-500"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProductsCategory;
