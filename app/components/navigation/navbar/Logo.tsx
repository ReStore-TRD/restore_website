import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/logos/logo.png"
          alt="Logo"
          width={"194"}
          height={"35"}
          layout="responsive"
        />
      </Link>
    </>
  );
};

export default Logo;
