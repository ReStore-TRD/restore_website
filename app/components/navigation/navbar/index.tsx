import Logo from "../Logo";
import Button from "../Button";
import MySVGImage from "../../../assets/navigation_bar/join_us.svg";
import AboutLine from "../../../assets/navigation_bar/about.svg";
import ProjectLine from "../../../assets/navigation_bar/projects.svg";
import FaqLine from "../../../assets/navigation_bar/faq.svg";
import Image from "next/image";
import NavigationItem from "./NavigationItem";

const Navbar = () => {
  return (
    <div className="w-full h-20 top-10 bg-background">
      <div className="container mx-auto px-4 h-full w-11/12">
        <div className="flex justify-between h-full items-center">
          <Logo />
          <div className="flex justify-between gap-x-10 h-full">
            <div className="hidden my-auto md:flex gap-x-4 text-black text-xs content-center h-full">
              <NavigationItem
                href="/about"
                text="About"
                imageSrc={AboutLine}
                altText=""
              />
              <NavigationItem
                href="/projects"
                text="Projects"
                imageSrc={ProjectLine}
                altText=""
              />
              <NavigationItem
                href="/faq"
                text="FAQ"
                imageSrc={FaqLine}
                altText=""
              />
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
