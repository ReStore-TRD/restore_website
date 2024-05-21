"use client";
import { ResearchData } from "@/app/utils/types";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import rough from 'roughjs/bin/rough';
import '@fontsource/indie-flower';

interface BasicBarsProps {
  data: ResearchData;
}


// Rough.js plugin for Chart.js
const roughPlugin = {
  id: 'rough',
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const roughCanvas = rough.canvas(ctx.canvas);

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((bar, index) => {
        const { x, y, width, base } = bar;

        // Clear the original bar
        ctx.clearRect(x - width / 2, y, width, base - y);

        // Draw the hand-drawn bar with simple fill
        roughCanvas.rectangle(x - width / 2, y, width, base - y, {
          stroke: dataset.backgroundColor,
          fill: dataset.backgroundColor,
          fillStyle: 'solid',  // Simple fill style
          roughness: 2,
          bowing: 2,
          strokeWidth: 2,
        });
      });
    });
  },
};

// Register the plugin
Chart.register(roughPlugin);

export default function BasicBars({ data }: BasicBarsProps) {
  const chartData = {
    labels: ['2023', '2024'],
    datasets: [
      {
        data: [
          data?.volunteerHoursWorkedLastYear ?? 0,
          data?.volunteerHoursWorkedThisYear ?? 0,
        ],
        backgroundColor: '#ed0965',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,  // Disable grid lines
        },
        ticks: {
          font: {
            family: 'Comic Sans MS',
            size: 14,
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Comic Sans MS',
            size: 14,
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
