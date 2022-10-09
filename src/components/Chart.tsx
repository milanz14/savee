// React imports
import { useEffect, useState } from "react";

// types and interfaces
import { Transaction } from "../interfaces/transactions";
import { ChartDataProps } from "../interfaces/ChartDataProps";

interface ChartProps {
  transactions: Transaction[];
}

const Chart = ({ transactions }: ChartProps): JSX.Element => {
  const INITIAL_CHART_DATA = {
    labels: [],
    datasets: [{ label: "", data: 1 }],
  };

  const [chartData, setChartData] =
    useState<ChartDataProps>(INITIAL_CHART_DATA);
  return (
    <div>
      <h2>TODO</h2>
    </div>
  );
};

export default Chart;
