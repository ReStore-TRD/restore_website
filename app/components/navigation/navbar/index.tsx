import React from "react";
import Link from "next/link";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-10 ">
        <div className="container mx-auto px-4 h-full w-11/12">
          <div className="flex justify-between items-center h-full ">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <p>FAQ</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;