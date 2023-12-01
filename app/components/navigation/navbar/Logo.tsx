"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

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
          width={width < 1024 ? "150" : "250"}
          height={width < 1024 ? "45" : "74"}
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;