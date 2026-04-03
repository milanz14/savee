import { Line, LineChart } from "recharts";

const Chart = () => {
  return (
    <div className="h-full border border-[#818cf8] rounded-lg shadow-2xl">
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={data}>
        <Line dataKey="uv" />
      </LineChart>
      );
    </div>
  );
};

export default Chart;
