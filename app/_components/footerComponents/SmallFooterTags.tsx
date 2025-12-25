import Image from "next/image";
import Link from "next/link";

const SmallFooterTags: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 col-span-5 xlg:col-span-3 md:hidden">
      <div className="flex flex-col gap-2">
        <p className="text-black">دانلود اپلیکیشن</p>
        <ul className="flex gap-3 [&>li>img]:md:grayscale-100">
          <li>
            <a className="relative w-6 h-6 block" href="#">
              <Image
                src="/images/play-store.png"
                alt="فروشگاه پلی"
                fill
                className="hover:grayscale-0 object-contain"
                sizes="(max-width: 24px)"
              />
            </a>
          </li>
          <li>
            <a className="relative w-6 h-6 block" href="#">
              <Image
                fill
                className="hover:grayscale-0 object-contain"
                sizes="(max-width: 24px)"
                src="/images/myket.png"
                alt="اپلیکیشن مایکت"
              />
            </a>
          </li>
          <li>
            <a className="relative w-6 h-6 block" href="#">
              <Image
                fill
                className="hover:grayscale-0 object-contain"
                sizes="(max-width: 24px)"
                src="/images/bazaar.png"
                alt="اپلیکیشن بازار"
              />
            </a>
          </li>
          <li>
            <a
              className="relative w-6 h-6 block"
              href="https://avalingo.ir/Avalingo.apk"
            >
              <Image
                fill
                className="hover:grayscale-0 object-contain "
                sizes="(max-width: 24px)"
                src="/images/android-icon.png"
                alt="اندروید"
              />
            </a>
          </li>
          <li>
            <a
              className="relative w-6 h-6 block"
              href="https://pwa.avalingo.app"
            >
              <Image
                fill
                className="hover:grayscale-0 object-contain"
                sizes="(max-width: 24px)"
                src="/images/apple.png"
                alt="اپل"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-black">با ما در تماس باشید</p>
        <ul className="flex gap-3 [&>li>img]:md:grayscale-100">
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

export default SmallFooterTags;
