// hardcoded data for testing purposes
{/*interface PieChartProps {
    data?: { label: string; value: number; color: string }[];
  }
  
const defaultData = [
    { label: "Furniture", value: 46, color: "#ED0965" },
    { label: "Kitchen", value: 10, color: "#f4cccc" },
    { label: "Bikes", value: 4, color: "#b7b7b7" },
    { label: "Others", value: 3, color: "#98064e" },
    { label: "Beddings", value: 8, color: "#cfe2f3" },
    { label: "Office", value: 28, color: "#ffd966" },
  ];
*/}


import { CategoryItem } from "@/app/utils/types";

interface PieChartProps {
  data: CategoryItem[];
}

  export default function PieChart({ data }: PieChartProps) {
    const sortedData = data.sort((a, b) => b.value - a.value); 
    const total = sortedData.reduce((sum, d) => sum + d.value, 0);
    const angles = sortedData.map((d, i) => {
      const start = sortedData.slice(0, i).reduce((sum, d) => sum + d.value, 0);
      const percent = (d.value / total) * 100;
      return {
        ...d,
        from: (start / total) * 360,
        to: ((start + d.value) / total) * 360,
      };
    });
  
    const conicGradient = angles
      .map((d) => `${d.color} ${d.from}deg ${d.to}deg`)
      .join(", ");
  
    return (
      <div className="flex flex-col w-full items-center">
        <h3 className="text-sm mb-4">
          Potential Emissions Saved per Category
        </h3>
        <div className="relative flex-1 w-full aspect-square max-w-[200px] mb-5">
          <div
            className="absolute inset-0 rounded-full"
            style={{ backgroundImage: `conic-gradient(${conicGradient})` }}
          ></div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-xs grid grid-cols-3 gap-0.5">
            {data.map((d) => (
              <div key={d.label} className="flex items-center ">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                ></span>
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  