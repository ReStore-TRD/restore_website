"use client";
import { useState, useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface InfoGraphicProps {
  isLeftLayout: boolean;
  content: ReactNode;
  data?: number;
  text1: string;
  text2: string;
}

function InfoGraphic({
  isLeftLayout,
  content,
  data,
  text1,
  text2,
}: InfoGraphicProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const numOfVoluntaryHours = data ?? 0;

  useEffect(() => {
    setIsCounting(true);
  }, [inView]);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        if (count < numOfVoluntaryHours) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isCounting, count]);

  return (
    <div className="w-min xl:w-full justify-center">
      <div className="h-[300px] lg:h-[400px] w-min lg:w-auto flex aspect-square lg:aspect-auto justify-between rounded-full  bg-beige-dark lg:mx-40">
        <div
          className={`flex flex-col ${
            !isLeftLayout ? "order-1" : ""
          } text-white items-center gap-2 justify-center bg-restore-pink aspect-square rounded-full`}
        >
          <div>{text1}</div>
          <div className="text-[64px] lg:text-[128px] font-bold" ref={ref}>
            {count}
          </div>
          <div>{text2}</div>
        </div>
        <div className=" w-3/5   px-16 justify-center items-center hidden xl:flex">
          {content}
        </div>
      </div>
    </div>
  );
}

export default InfoGraphic;
