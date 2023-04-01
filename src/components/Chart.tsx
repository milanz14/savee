// types and interfaces
import { CategorySorted } from "../interfaces/CategorySorted";

// npm imports
import "chart.js/auto";
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
    labels: ["Shopping", "Housing", "Salary"],
    datasets: [
      {
        label: "$ in category",
        data: [-98, -34, 1000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [chartData, setChartData] = useState(INITIAL_CHART_DATA);

  useEffect(() => {
    updateChartData(data);
  }, [data]);

  const updateChartData = (data: CategorySorted[]): void => {
    const newChartData = {};
    for (const item of data) {
      console.log(item);
    }
  };

  return (
    <div>
      <h4>CHART</h4>
      <Pie data={chartData} />
    </div>
  );
};

export default Chart;
