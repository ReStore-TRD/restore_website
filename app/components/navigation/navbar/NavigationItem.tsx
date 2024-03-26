import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationItemProps {
  href: string;
  text: string;
  imageSrc: string;
  altText: string; 
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, text, imageSrc, altText }) => {
  return (
    <div className="group flex-col inset-0 flex items-center justify-center">
      <Link href={href} className="relative text-black border-r pr-4 hover:font-bold">
        {text}
        <div className="absolute right-4 left-0 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src={imageSrc}
            alt={altText}
            objectFit="contain"
            className="mix-blend-multiply"
          />
        </div>
      </Link>
    </div>
  );
};

export default NavigationItem;