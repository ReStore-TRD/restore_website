"use client";
import { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { StructuredText } from "react-datocms/structured-text";
import dropdownArrow from "../../assets/faq_page/dropdown-arrow.svg";
import Image from "next/image";

type FaqDropdownProps = {
  question: String;
  answer: any;
};

const DropdownItem = ({ question, answer }: FaqDropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const updateContentHeight = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);

    return () => {
      window.removeEventListener("resize", updateContentHeight);
    };
  }, [answer]);

  // Animation config for the content's height
  const contentAnimation = useSpring({
    height: isActive && contentHeight ? `${contentHeight}px` : "0px",
    opacity: isActive ? 1 : 0,
    config: {
      tension: 500,
      friction: 30,
      clamp: true,
    },
  });

  return (
    <div className=" border-b-beige border-b-2">
      <div
        className="flex justify-between py-10 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-lg font-medium">{question}</div>
        <Image
          src={dropdownArrow}
          alt={"dropdown arrow icon"}
          className={`transform ${
            isActive ? "rotate-180" : "rotate-0"
          }  transition duration-10 ease-in-out group-hover:rotate-180`}
        />
      </div>
      <animated.div style={contentAnimation} className="overflow-hidden">
        <div ref={contentRef} className="w-full pb-8 ">
          <StructuredText data={answer} />
        </div>
      </animated.div>
    </div>
  );
};

export default DropdownItem;
