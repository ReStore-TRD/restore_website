"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfoGraphicProps {
  isLeftLayout: boolean;
}

function InfoGraphic({ isLeftLayout }: InfoGraphicProps) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (count < 500) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 7);
      return () => clearInterval(interval);
    }
  }, [inView, count]);

  return (
    <div className="w-min lg:w-full justify-center">
      <div className="h-[300px] lg:h-[400px] w-min lg:w-auto flex justify-between rounded-full bg-beige-dark lg:mx-40">
        <div
          className={`flex flex-col ${
            !isLeftLayout ? "order-1" : ""
          } text-white items-center gap-2 justify-center bg-restore-pink aspect-square rounded-full`}
        >
          <div>ReStore has saved a total of</div>
          <div className="text-[64px] lg:text-[128px] font-bold" ref={ref}>
            {count}
          </div>
          <div>tons of CO2 since 2019!</div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default InfoGraphic;
