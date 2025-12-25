import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/samar-nuts.jpg"
        width={64}
        height={64}
        alt="لوگو آوالینگو"
        className="lg:w-38.75"
      />
    </Link>
  );
};

export default Logo;
