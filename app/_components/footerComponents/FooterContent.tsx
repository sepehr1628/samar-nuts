import Link from "next/link";
import Attachments from "./Attachments";
import FooterDetails from "./FooterDetails";
import SmallFooterTags from "./SmallFooterTags";

const FooterContent: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-4 md:gap-y-10 justify-start px-5 md:px-16">
        <FooterDetails />
        <Attachments />
        <SmallFooterTags />
      </div>
      <Link
        href="#header"
        className="group border border-[#b6b6b6] text-[#8C8D8E] hover:border-[#31aec7e0] px-2 py-2 rotate-90 rounded-full w-fit m-5 md:mx-16"
        aria-label="برو به بالا"
        title="برو به بالا"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#8C8D8E"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:text-[#31ADC7]"
        >
          <g opacity="0.6">
            <path
              d="M7.19938 12C7.19938 11.3 7.46937 10.6 7.99937 10.07L14.5194 3.55002C14.8094 3.26002 15.2894 3.26002 15.5794 3.55002C15.8694 3.84002 15.8694 4.32002 15.5794 4.61002L9.05937 11.13C8.57937 11.61 8.57937 12.39 9.05937 12.87L15.5794 19.39C15.8694 19.68 15.8694 20.16 15.5794 20.45C15.2894 20.74 14.8094 20.74 14.5194 20.45L7.99937 13.93C7.46937 13.4 7.19938 12.7 7.19938 12Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </Link>
    </>
  );
};

export default FooterContent;
