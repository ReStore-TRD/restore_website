"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar/Sidebar";

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
    <nav className="relative z-50 ">
      {isDesktop ? (
        <Navbar />
      ) : (
        <Sidebar toggleSidebar={toggleSidebar} isOpen={open} />
      )}
    </nav>
  );
}
