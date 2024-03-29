"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import Navbar from "./navbar";
import Logo from "./Logo";
import Image from "next/image";
import SidebarLine from "../../assets/navigation_bar/sidebar.svg";
import Button from "./Button";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768); // Adjust the breakpoint as needed
    }

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <main>
        <div>
          <div>
            <div>
              {isDesktop ? (
                <Navbar />
              ) : (
                <>
                  <div className="flex justify-between items-center bg-background pl-2 pr-2">
                    <Logo />
                    <button onClick={() => toggleSidebar()}>
                      <Image
                        src={SidebarLine}
                        alt="sidebar"
                        objectFit="contain"
                        className="mix-blend-multiply"
                      />
                    </button>
                    {open && (
                      <div
                        className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40"
                        onClick={toggleSidebar}
                      ></div>
                    )}
                    <div
                      className={
                        open
                          ? "absolute top-0 right-0 z-50 h-screen w-3/5 bg-background"
                          : "hidden"
                      }
                    >
                      <div className="flex flex-col text-center">
                        <button
                          className="mb-7 mt-7 mr-1 flex justify-end px-5 text-xl"
                          onClick={() => toggleSidebar()}
                        >
                          <GrClose className="text-repink" />
                        </button>
                        <div className="flex flex-col">
                          <Link href="/about">About</Link>
                          <Link href="/projects">Projects</Link>
                          <Link href="/faq">FAQ</Link>
                          <div className="text-white text-xs">
                            <Button />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
