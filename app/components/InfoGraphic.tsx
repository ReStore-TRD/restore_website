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
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Only trigger once when it comes into view
  });
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const numOfVoluntaryHours = data ?? 0;

  useEffect(() => {
    if (inView) {
      setIsCounting(true);
      setCount(0); // Reset the count when in view
    }
  }, [inView]);

  useEffect(() => {
    if (isCounting) {
      const increment = Math.ceil(numOfVoluntaryHours / 100); // Calculate the increment
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + increment;
          if (nextCount >= numOfVoluntaryHours) {
            clearInterval(interval);
            return numOfVoluntaryHours;
          }
          return nextCount;
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isCounting, numOfVoluntaryHours]);

  return (
    <div className="w-min xl:w-full justify-center">
      <div className="h-[300px] lg:h-[400px] w-min lg:w-auto flex aspect-square lg:aspect-auto justify-between rounded-full bg-beige-dark lg:mx-40">
        <div
          className={`flex flex-col ${
            !isLeftLayout ? "order-1" : ""
          } text-white items-center gap-2 justify-center bg-restore-pink aspect-square rounded-full`}
        >
          <div>{text1}</div>
          <div className="text-[64px] lg:text-[100px] font-bold" ref={ref}>
            {count}
          </div>
          <div>{text2}</div>
        </div>
        <div className="w-3/5 px-16 justify-center items-center hidden xl:flex">
          {content}
        </div>
      </div>
    </div>
  );
}

export default InfoGraphic;
