import Image from "next/image";
import Link from "next/link";

const LargeFooterTags: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col gap-10 col-span-5 xlg:col-span-2">
      <div className="flex flex-col gap-2">
        <p className="text-black">دانلود اپلیکیشن</p>
        <ul className="flex flex-wrap gap-2 [&>li>a>img]:grayscale-100">
          <li>
            <a href="#">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0 w-6 h-6"
                src="/images/play-store.png"
                alt="فروشگاه پلی"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0 h-6 w-6"
                src="/images/myket.png"
                alt="اپلیکیشن مایکت"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/bazaar.png"
                alt="اپلیکیشن بازار"
              />
            </a>
          </li>
          <li>
            <a href="https://avalingo.ir/Avalingo.apk">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0 w-6 h-6"
                src="/images/android-icon.png"
                alt="اندروید"
              />
            </a>
          </li>
          <li>
            <a href="https://pwa.avalingo.app">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/apple.png"
                alt="اپل"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black">با ما در تماس باشید</p>
        <ul className="flex flex-wrap gap-2 [&>li>a>img]:grayscale-100">
          <li>
            <Link href="https://instagram.com/avalingo.official">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/instagram.png"
                alt="اینستاگرام"
              />
            </Link>
          </li>
          <li>
            <Link href="https://rubika.ir/avalingo">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/bale.png"
                alt="اپلیکیشن بله"
              />
            </Link>
          </li>
          <li>
            <Link href="https://rubika.ir/avalingo">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/rubika.png"
                alt="اپلیکیشن روبیکا"
              />
            </Link>
          </li>
          <li>
            <Link href="https://rubika.ir/avalingo">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/aparat.png"
                alt="آپارات"
              />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/avalingoapp">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/telegram.png"
                alt="تلگرام"
              />
            </Link>
          </li>
          <li>
            <Link href="https://yotube.com/@avalingoapp">
              <Image
                width={24}
                height={24}
                className="hover:grayscale-0"
                src="/images/youtube.png"
                alt="یوتیوب"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LargeFooterTags;
