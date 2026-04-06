import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { Transaction } from "../../../interfaces/interfaces";

const Chart = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <div className="h-full border border-[#818cf8] rounded-lg shadow-2xl transition-all duration-200  hover:-translate-y-1  hover:shadow-md">
      <ResponsiveContainer width="100%" className="shadow-2xl">
        <LineChart
          data={transactions}
          style={{ aspectRatio: 1.618, maxWidth: 946 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#818cf8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
