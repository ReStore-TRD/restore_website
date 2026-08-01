import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavigationItemProps {
  href: string;
  text: string;
  imageSrc: string;
  altText: string;
  isActiveRoute: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  text,
  imageSrc,
  altText,
  isActiveRoute,
}) => {
  return (
    <div className="group flex-col inset-0 flex items-center justify-center">
      <Link
        href={href}
        className="text-black border-r pr-4 hover:font-bold"
      >
        <span className="relative inline-block">
          {text}
          <span
            className={`absolute top-full left-0 right-0 mt-0.5 opacity-0 pointer-events-none transition-opacity duration-300 ${
              isActiveRoute ? "opacity-100" : "group-hover:opacity-100"
            }`}
          >
            <Image
              src={imageSrc}
              alt={altText}
              className="mix-blend-multiply w-full h-auto"
            />
          </span>
        </span>
      </Link>
    </div>
  );
};

export default NavigationItem;
