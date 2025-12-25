import Image from "next/image";

import LargeFooterTags from "./LargeFooterTags";

const FooterDetails: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 col-span-6 sm:col-span-5 xlg:col-span-3">
      <div className="[&>p]:text-[#8C8D8E] [&>p]:text-sm [&>address>p]:text-[#8C8D8E] [&>address>p]:text-sm flex flex-col gap-2">
        <Image
          src="/images/avalingo-footer.png"
          alt="سوپر اپلیکیشن آوالینگو"
          width={202}
          height={65}
        />
        <p className="w-full leading-6">
          آوا لینگو اولین سوپر اپلیکیشن زبان آموزی هست که با رویکردی جدید و
          متفاوت در زمینه آموزش و یادگیری زبان دوم به دنبال ایجاد یک انقلاب در
          زمینه زبان های خارجی هست.
        </p>
        <address className="flex flex-col gap-3">
          <p>آدرس: تهران، سعادت آباد، سرو شرقی، پلاک 64</p>
          <p>
            تماس: <a href="tel:+2191002122">22 21 9100-021</a>
          </p>
        </address>
      </div>
      <LargeFooterTags />
    </div>
  );
};

export default FooterDetails;
