import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface SmallScreenMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreenMenu: React.FC<SmallScreenMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body")?.classList.add("overflow-hide");
    } else {
      document.querySelector("body")?.classList.remove("overflow-hide");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      id="small-screen-menu"
      className={`fixed top-0 bottom-0 right-0 left-0 backdrop-blur-md h-screen z-40 transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        ref={menuRef}
        id="small-screen-menu"
        className={`fixed top-0 bottom-0 right-0 w-4/5 h-screen z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white z-30 w-full h-full p-5 pb-3 shadow-xl overflow-y-auto">
          <button type="button" aria-label="بستن منو">
            <Image
              onClick={handleClick}
              width={28}
              height={28}
              src="/images/close-menu.png"
              alt="بستن منو"
            />
          </button>

          <ul className="space-y-6 mt-10 [&>li]:text-[1.1rem] [&>li]:bg-white [&>li]:pb-1">
            <li className="text-[16px]">
              <Link href="/" className="text-black block py-2">
                خانه
              </Link>
            </li>
            <li className="text-[16px]">
              <Link href="/subscription" className="text-black block py-2">
                اشتراک ها
              </Link>
            </li>
            <li className="text-[16px]">
              <Link href="/" className="text-black block py-2">
                مقالات
              </Link>
            </li>
            <li className="text-[16px]">
              <Link href="/" className="text-black block py-2">
                فروشگاه
              </Link>
            </li>
            <li className="text-[16px]">
              <Link href="/about-us" className="text-black block py-2">
                درباره ما
              </Link>
            </li>
            <li className="text-[16px]">
              <Link href="/contact-us" className="text-black block py-2">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
