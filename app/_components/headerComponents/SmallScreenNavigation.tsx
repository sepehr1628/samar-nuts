"use client";

import Image from "next/image";
import { useState } from "react";
import SmallScreenMenu from "./SmallScreenMenu";

import { IoLogoInstagram } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const SmallScreenNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    document.querySelector("body")!.classList.toggle("overflow-hide");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between p-3 pt-6 xlg:hidden backdrop-opacity-25 bg-green-800 w-full">
      <SmallScreenMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <button
        aria-label="باز کردن منو"
        aria-expanded={isMenuOpen}
        aria-controls="small-screen-menu"
        onClick={handleClick}
        className="block xlg:hidden"
      >
        <Image
          src="/images/hamburger-menu-icon.png"
          width={30}
          height={30}
          alt="دکمه باز کردن"
        />
      </button>
      <div className="flex items-center gap-3">
        <Link href="">
          <IoLogoInstagram size={25} />
        </Link>
        <Link href="">
          <BsWhatsapp size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SmallScreenNavigation;
