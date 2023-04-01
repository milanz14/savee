// types and interfaces
import { SortedByCategory } from "../interfaces/CategorySorted";
import { ChartDataInterface } from "../interfaces/ChartDataProps";

// npm imports
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

// react imports
import { useState, useEffect } from "react";

interface ChartProps {
  data: SortedByCategory[];
}
const backgroundColorsOptions = [
  "rgba(255, 99, 132, 0.4)",
  "rgba(54, 162, 235, 0.4)",
  "rgba(255, 206, 86, 0.4)",
  "rgba(75, 192, 192, 0.4)",
  "rgba(153, 102, 255, 0.4)",
  "rgba(101, 101, 64, 0.4)",
  "rgba(0, 159, 64, 0.4)",
  "rgba(255, 0, 199, 0.4)",
  "rgba(255, 159, 64, 0.4)",
];

const Chart = ({ data }: ChartProps): JSX.Element => {
  const [chartData, setChartData] = useState<ChartDataInterface | null>(null);

  useEffect(() => {
    updateChartData(data);
  }, [data]);

  const updateChartData = (data: SortedByCategory[]): void => {
    let newChartData = {
      labels: [],
      datasets: [{ label: "$", data: [], backgroundColor: [] }],
    };
    for (const item of data) {
      const dataSetColor = backgroundColorsOptions.pop();
      // console.log(item); // { category: string, amount: number }
      // TODO - fix this, this is the root of the entire issue, the value returned are just the lengths of the array
    }
    // setChartData(newChartData);

    console.log(newChartData);
  };

  return (
    <div>
      <h4>CHART</h4>
      {/* <Pie data={chartData} /> */}
    </div>
  );
};

export default Chart;
