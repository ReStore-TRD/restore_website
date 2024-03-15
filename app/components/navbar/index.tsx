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
          <div className="flex justify-between h-full items-center">
            <Logo />
            <div className="flex justify-between gap-x-10 h-full">
              <div className="hidden my-auto md:flex gap-x-4 text-black text-xs content-center h-full">
                <div className="relative group flex flex-col absolute inset-0 flex items-center justify-center">
                  <Link href="/about" className="relative border-r pr-4 hover:font-bold ">
                    About
                      <div className="absolute right-4 left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                      <Image
                        src={AboutLine}
                        alt={""}
                        objectFit="contain"
                        className="mix-blend-multiply"
                      />
                    </div>
                  </Link>
                </div>
                <div className="relative group flex flex-col absolute inset-0 flex items-center justify-center">
                  <Link href="/projects" className="relative border-r pr-4 hover:font-bold">
                    Projects
                      <div className="absolute right-4 left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                      <Image
                        src={ProjectLine}
                        alt={""}
                        objectFit="contain"
                        className="mix-blend-multiply"
                      />
                  </div>
                  </Link>
                </div>
                <div className="relative group flex flex-col absolute inset-0 flex items-center justify-center">
                  <Link href="/faq" className="hover:font-bold relative">
                    FAQ
                    <div className="absolute left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                        <Image
                          src={FaqLine}
                          alt={""}
                          objectFit="contain"
                          className="mix-blend-multiply"
                        />
                    </div>
                  </Link>
                </div>
                <div className="relative group flex flex-col items-end absolute inset-0 justify-center">
                  <div className="inline-flex">
                    <div className="text-white hover:opacity-80 text-xs">
                      <Button />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 transform translate-x-full opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src={MySVGImage}
                      alt={""}
                      objectFit="contain"
                      className="mix-blend-multiply w-6 h-6"
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