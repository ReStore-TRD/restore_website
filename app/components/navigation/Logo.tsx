import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="relative h-16 w-36 ">
      <Link href="/">
        <Image
          src="/images/logos/logo.png"
          alt="Logo"
          fill={true}
          objectFit="contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
