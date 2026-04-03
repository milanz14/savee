import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { Transaction } from "../../interfaces/interfaces";

const Chart = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <div className="h-full border border-[#818cf8] rounded-lg shadow-2xl">
      <ResponsiveContainer width="100%">
        <LineChart data={transactions}>
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
