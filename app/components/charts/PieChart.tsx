interface PieChartProps {
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

  
  export default function PieChart({ data=defaultData }: PieChartProps) {


    const sortedData = data.sort((a, b) => b.value - a.value); // sort descending  

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
      <div className="flex flex-row items-center">
          <div className="mt-4 space-y-2 text-sm mr-6">
            {data.map((d) => (
              <div key={d.label} className="flex items-center gap-2">
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ backgroundColor: d.color }}
                ></span>
                <span>{d.label}</span>
              </div>
            ))}
        </div>
        <div
          className="w-64 h-64 rounded-full"
          style={{ backgroundImage: `conic-gradient(${conicGradient})` }}
        ></div>
      </div>
    );
  }
  