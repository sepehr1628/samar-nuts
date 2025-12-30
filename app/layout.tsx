import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmallScreenNavigation from "./_components/headerComponents/SmallScreenNavigation";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const iranSansX = localFont({
  src: "../public/fonts/IRANSansX-Medium.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "",
  description: "آوالینگو جامع ترین اپلیکیشن آموزش زبان",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="fa">
      <body dir="rtl" className={`${iranSansX.className} overflow-x-hidden`}>
        <header className="flex flex-col gap-2 p-5 md:px-16 max-w-450 mx-auto">
          <div className="flex items-center justify-between border-b border-neutral-200">
            <div className="flex items-center gap-5">
              <Image src="/images/" alt="" width={50} height={50} />
            </div>
            <div className="flex items-center gap-5">
              <button className="text-neutral-500 text-sm rounded-lg px-3 py-2 border border-neutral-200">
                ورود | ثبت‌‌نام
              </button>
              |<span>Cart</span>
            </div>
          </div>
          <nav>
            <SmallScreenNavigation />
          </nav>
        </header>
        <main className="bg-[#e8e8e8]">{children}</main>
        <footer className="bg-white flex flex-col gap-10 px-5 pt-20 md:px-16 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-0">
            <div className="md:col-span-3 flex flex-col gap-3 [&>a]:text-neutral-500">
              <strong>خدمات مشتریان</strong>
              <Link href="/" className="mt-2">
                لینک
              </Link>
              <Link href="/">لینک</Link>
              <Link href="/">لینک</Link>
              <Link href="/">لینک</Link>
            </div>
            <div className="md:col-span-3 flex flex-col gap-3 [&>a]:text-neutral-500">
              <strong>راهنمای خرید</strong>
              <Link href="/" className="mt-2">
                لینک
              </Link>
              <Link href="/">لینک</Link>
              <Link href="/">لینک</Link>
              <Link href="/">لینک</Link>
            </div>
            <div className="md:col-span-6 flex flex-col gap-5">
              <strong>با ما همراه باشید</strong>
              <p className="text-neutral-500">
                از جدید ترین تخفیف‌ها باخبر شوید
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="آدرس ایمیل خودرا وارد کنید"
                  className="flex-1 bg-neutral-200 py-2 px-2 pr-5 rounded-lg focus:outline-none"
                />
                <button className="px-6 bg-neutral-400 py-2 rounded-lg">
                  ثبت
                </button>
              </div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link href="">
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaWhatsapp size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center border-t border-neutral-400 py-3 text-sm text-neutral-500">
            استفاده از مطالب فروشگاهی اینترنتی سمر فقط برای مقاصد غیرتجاری و با
            ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به آجیل و خشکبار سمر
            می‌باشد.
          </div>
        </footer>
      </body>
    </html>
  );
}
