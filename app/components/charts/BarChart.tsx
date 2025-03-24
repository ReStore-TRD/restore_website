"use client";
import { ResearchData } from "@/app/utils/types";
import { BarChart } from "@mui/x-charts/BarChart";

interface BasicBarsProps {
  data: ResearchData;
}

export default function BasicBars({ data }: BasicBarsProps) {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["2023", "2024", "2025"] }]}
      series={[
        {
          data: [
            data?.volunteerHoursWorked2023 ?? 0,
            data?.volunteerHoursWorkedLastYear ?? 0,
            data?.volunteerHoursWorkedThisYear ?? 0,
          ],
          color: "#ed0965",
        },
      ]}
      tooltip={{ trigger: "none" }}
    />
  );
}