import React from "react";
import Link from "next/link"
import Image from "next/image";

import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  

const items = [
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/restore_trd"},
    { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/ReStore.TRD"},
    { name: "LinkedIn", icon: FaLinkedinIn, link: "https://www.linkedin.com/company/restore-trd" },
  ];
  

const Footer = () => {
  return (
    <>
      <div className="w-full pt-10 pb-10 bg-gray-300 items-center opacity-60">
        <div className="container mx-auto px-4 h-full w-11/12">
            <div className="flex justify-between">
                <div>
                  <a className="text-xs">In partnership with: </a>
                  <Link href="https://www.sit.no/en/reuse">
                    <Image
                      src="/images/logos/sit-logo-standard.svg"
                      alt="Sit"
                      width={"136"}
                      height={"54"}
                      layout= "responsive"
                    />
                  </Link>
                </div>

                <div className="flex items-center space-x-3 text-4xl">
                  {items.map((x, index) => (
                    <Link key={index} href={x.link} className="hover:text-white">
                        <x.icon />
                    </Link>
                  ))}

                </div>

                <div className="text-sm text-center">

                    <p> Prestekragevegen 14 <br></br>
                        7050, Trondheim </p>
                        <br></br>
                    <a href="mailto:info@restore-trd.no">info@restore-trd.no</a>
                </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;