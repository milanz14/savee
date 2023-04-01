// types and interfaces
import { ChartDataProps } from "../interfaces/ChartDataProps";
import { CategorySorted } from "../interfaces/CategorySorted";

// npm imports
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// react imports
import { useState, useEffect } from "react";

interface ChartProps {
  data: CategorySorted[];
}

const colorOptions = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Cyan",
  "Magenta",
  "Pink",
  "Purple",
  "Black",
  "Mauve",
];

const Chart = ({ data }: ChartProps): JSX.Element => {
  const INITIAL_CHART_DATA = {
    labels: [],
    datasets: [{ label: "", data: 1 }],
  };

  const [chartData, setChartData] = useState(INITIAL_CHART_DATA);

  useEffect(() => {
    //
  }, [data]);

  return (
    <div>
      <h2>TODO</h2>
    </div>
  );
};

export default Chart;
