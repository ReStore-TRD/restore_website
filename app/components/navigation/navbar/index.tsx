import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import MySVGImage from "./join_us.svg";
import AboutLine from "./About.svg";
import ProjectLine from "./Projects.svg";
import FaqLine from "./Faq.svg";
import Image from "next/image";

const Navbar = () => {
  return (
      <div className="w-full h-20 top-10 bg-background">
        <div className="container mx-auto px-4 h-full w-11/12">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <div className="flex justify-between gap-x-10">
              <div className="hidden my-auto md:flex gap-x-4 text-black text-xs content-center">
                <div className="relative group flex flex-col gap-1">
                  <Link href="/about" className="border-r pr-4 hover:font-bold ">
                    About
                  </Link>
                  <div className="absolute bottom-0 right-4 left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src={AboutLine}
                      alt={""}
                      objectFit="contain"
                      className="mix-blend-multiply"
                    />
                  </div>
                </div>
                <div className="relative group flex flex-col gap-1">
                  <Link href="/projects" className="border-r pr-4 hover:font-bold">
                    Projects
                  </Link>
                  <div className="absolute bottom-0 right-4 left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src={ProjectLine}
                      alt={""}
                      objectFit="contain"
                      className="mix-blend-multiply"
                    />
                  </div>
                </div>
                <div className="relative group flex flex-col gap-1">
                  <Link href="/faq" className="hover:font-bold ">
                    FAQ
                  </Link>
                  <div className="absolute bottom-0  left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                        <Image
                          src={FaqLine}
                          alt={""}
                          objectFit="contain"
                          className="mix-blend-multiply"
                        />
                  </div>
                </div>

              <div className="relative group inline-flex">
                <div className="text-white hover:opacity-80 text-xs">
                  <Button />
                </div>
                <div className="absolute top-0 right-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                  <Image
                    src={MySVGImage}
                    alt={""}
                    objectFit="contain"
                    className="mix-blend-multiply w-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;