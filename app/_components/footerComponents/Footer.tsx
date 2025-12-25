"use client";

import { usePathname } from "next/navigation";

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  return (
    <footer
      id="footer"
      className={`${
        pathname.startsWith("/ava-tube") ? "bg-[#FD5E661A]" : "bg-[#BEE5ED4A]"
      } pt-10 flex flex-col`}
    >
      {children}
    </footer>
  );
};

export default Footer;
