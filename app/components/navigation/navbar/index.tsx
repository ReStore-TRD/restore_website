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
              <ul className="hidden my-auto md:flex gap-x-4 text-black text-xs content-center">
                <li className="border-r pr-4 hover:font-bold ">
                  <Link href="/about">
                    <p>About</p>
                  </Link>
                </li>
                <li className="border-r pr-4 hover:font-bold hover-line">
                  <Link href="/projects">
                    <p>Projects</p>
                  </Link>
                </li>
                <li className="hover:font-bold hover-line">
                  <Link href="/faq">
                    <p>FAQ</p>
                  </Link>
                </li>
              </ul>
              <li className="text-white hover:opacity-80 text-xs">
                  <Button />
              </li>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;