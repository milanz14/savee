// types and interfaces
import { SortedByCategory } from "../interfaces/CategorySorted";

// npm imports
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

// react imports
import { useState, useEffect } from "react";

interface ChartProps {
  data: SortedByCategory[];
}

interface ChartDataInterface {
  labels: string[];
  datasets: { [key: string]: string | string[] | number[] }[];
}

const backgroundColorsOptions = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(101, 101, 64, 0.2)",
  "rgba(0, 159, 64, 0.2)",
  "rgba(255, 0, 199, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

const Chart = ({ data }: ChartProps): JSX.Element => {
  const INITIAL_CHART_DATA: ChartDataInterface = {
    labels: [],
    datasets: [
      {
        label: "$ in category",
        data: [] as number[],
        backgroundColor: [] as string[],
      },
    ],
  };

  const [chartData, setChartData] = useState(INITIAL_CHART_DATA);

  useEffect(() => {
    console.log(data);
    updateChartData(data);
    console.log(chartData);
  }, [data]);

  const updateChartData = (data: SortedByCategory[]): void => {
    let newChartData = {};
    for (const item of data) {
      const randomIndex = Math.floor(
        Math.random() * backgroundColorsOptions.length
      );
      const randColor = backgroundColorsOptions[randomIndex];
      console.log(item);
      newChartData = {
        ...INITIAL_CHART_DATA,
        labels: INITIAL_CHART_DATA.labels.push(item.category),
        datasets: (INITIAL_CHART_DATA.datasets[0].data as number[]).push(
          item.amount
        ),
        backgroundColor: (
          INITIAL_CHART_DATA.datasets[0].backgroundColor as string[]
        ).push(randColor),
      };
    }
    setChartData(newChartData as ChartDataInterface);
  };

  return (
    <div>
      <h4>CHART</h4>
      {/* <Pie data={chartData} /> */}
    </div>
  );
};

export default Chart;
