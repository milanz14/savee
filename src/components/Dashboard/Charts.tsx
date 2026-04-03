import { Line, LineChart } from "recharts";
import { useAuth } from "../../context/AuthContext";
import { useTransactions } from "../../hooks/useTransaction";

const Chart = () => {
  const { user } = useAuth();
  const { data: transactions } = useTransactions(user?.uid);

  return (
    <div className="h-full border border-[#818cf8] rounded-lg shadow-2xl">
      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
        responsive
        data={transactions}>
        <Line dataKey="uv" />
      </LineChart>
      );
    </div>
  );
};

export default Chart;
