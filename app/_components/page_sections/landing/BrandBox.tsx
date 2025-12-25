import Image from "next/image";

const BrandBox: React.FC = () => {
  return (
    <section>
      <Image
        src="/images/samar-nuts.jpg"
        alt="خشکبار و آجیل سمر"
        width={300}
        height={200}
        className="mx-auto"
      />
    </section>
  );
};

export default BrandBox;
