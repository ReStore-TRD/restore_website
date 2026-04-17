"use client";
import { ResearchData } from "@/app/utils/types";
import dynamic from "next/dynamic";

const BarChart = dynamic(
  () => import("@mui/x-charts/BarChart").then((mod) => mod.BarChart),
  { ssr: false }
);


interface BasicBarsProps {
  data: ResearchData;
}
  
export default function BasicBars({ data }: BasicBarsProps) {
  const chartData = data?.volunteerHoursByYear || [];
  console.log("ResearchData:", data);
  return (
    <BarChart
      height={300}
      xAxis={[
        {
          scaleType: "band",
          data: chartData.map((item) => item.year),
        },
      ]}
      series={[
        {
          data: chartData.map((item) => item.hours),
          color: "#ed0965",
        },
      ]}
      tooltip={{ trigger: "none" }}
    />
  );
}