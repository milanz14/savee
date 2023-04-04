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
  "rgba(255, 99, 132,1)",
  "rgba(54, 162, 235,1)",
  "rgba(255, 206, 86,1)",
  "rgba(75, 192, 192,1)",
  "rgba(153, 102, 255,1)",
  "rgba(101, 101, 64,1)",
  "rgba(0, 159, 64,1)",
  "rgba(255, 0, 199,1)",
  "rgba(255, 159, 64,1)",
];

// TODO - add different chart options
const Chart = ({ data }: ChartProps): JSX.Element => {
  const [chartData, setChartData] = useState<ChartDataInterface>();

  useEffect(() => {
    updateChartData(data);
  }, [data]);

  const updateChartData = (data: SortedByCategory[]): void => {
    let newChartData: ChartDataInterface = {
      labels: [],
      datasets: [{ label: "$", data: [], backgroundColor: [] }],
    };
    setChartData(newChartData);
    for (const item of data) {
      const dataSetColor = backgroundColorsOptions.pop();
      newChartData.labels.push(item.category);
      newChartData.datasets[0].data.push(item.amount);
      newChartData.datasets[0].backgroundColor.push(dataSetColor as string);
    }
    setChartData(newChartData);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      {chartData && (
        <div className="card align-items-center w-100 shadow-box py-2">
          <Pie data={chartData} />
        </div>
      )}
    </div>
  );
};

export default Chart;
