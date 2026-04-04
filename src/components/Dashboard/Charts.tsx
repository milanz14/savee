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
      <h1 className="bg-white text-black">Transactions by Date</h1>
      <ResponsiveContainer width="100%" className="shadow-2xl bg-white">
        <LineChart
          data={transactions}
          style={{ aspectRatio: 1.618, maxWidth: 946 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#818cf8" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
