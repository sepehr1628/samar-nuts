import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LargeScreenNavigation from "./_components/headerComponents/LargeScreenNavigation";
import SmallScreenNavigation from "./_components/headerComponents/SmallScreenNavigation";

const iranSansX = localFont({
  src: "../public/fonts/IRANSansX-Medium.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "سوپر اپلیکیشن آوالینگو",
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
      <body
        dir="rtl"
        className={`flex flex-col min-h-screen ${iranSansX.className}`}
      >
        <header id="header" className="z-50">
          <nav>
            <LargeScreenNavigation />
            <SmallScreenNavigation />
          </nav>
        </header>
        <main className="flex-1 z-40">{children}</main>
      </body>
    </html>
  );
}
