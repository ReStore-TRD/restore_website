"use client";
import { useState, useEffect } from "react";
import { VolunteerQuote } from "../utils/types";

interface QuoteCycleProps {
  quotes: VolunteerQuote[];
}

function QuoteCycle({ quotes }: QuoteCycleProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const cycleDuration = 10000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex + 1 < quotes.length ? prevIndex + 1 : 0
      );
    }, cycleDuration);

    return () => clearInterval(intervalId);
  }, [quotes, cycleDuration]);

  const { quote, author } = quotes[currentQuoteIndex] || {};

  return (
    <div className="flex  transition-opacity duration-500   flex-col gap-2 text-right text-xl md:text-2xl font-light text-gray-500 m-auto">
      <p key={quote}>{`"${quote}"`}</p>
      <p key={author}>{`- ${author}`}</p>
    </div>
  );
}

export default QuoteCycle;
