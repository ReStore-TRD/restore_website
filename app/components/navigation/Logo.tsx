import Link from "next/link";

const Logo = () => {
  return (
    <div className="relative h-16 w-36 ">
      <Link href="/">
        <img
          src="/images/logos/logo.svg"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
