import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-10 ">
        <div className="container mx-auto px-4 h-full w-11/12">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-black text-xs">
              <li className="border-r pr-4 hover:font-bold">
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li className="border-r pr-4 hover:font-bold">
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/faq">
                  <p>FAQ</p>
                </Link>
              </li>
              <li className="text-white hover:opacity-80">
                <Button />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;