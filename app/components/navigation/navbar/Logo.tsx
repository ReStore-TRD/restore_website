"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={width < 1024 ? "194" : "194"}
          height={width < 1024 ? "35" : "35"}
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;
