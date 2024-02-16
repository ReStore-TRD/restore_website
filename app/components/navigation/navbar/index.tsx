import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 top-10">
        <div className="container mx-auto px-4 h-full w-11/12">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <div className="flex justify-between gap-x-10">
              <div className="hidden my-auto md:flex gap-x-4 text-black text-xs content-center">
                <Link href="/about" className="border-r pr-4 hover:font-bold ">
                  About
                </Link>
                <Link href="/projects" className="border-r pr-4 hover:font-bold hover-line">
                  Projects
                </Link>
                <Link href="/faq" className="hover:font-bold hover-line">
                  FAQ
                </Link>
              </div>
              <div className="text-white hover:opacity-80 text-xs">
                  <Button />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;