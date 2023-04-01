// types and interfaces
import { ChartDataProps } from "../interfaces/ChartDataProps";
import { CategorySorted } from "../interfaces/CategorySorted";

interface ChartProps {
  data: CategorySorted[];
}

const Chart = ({ data }: ChartProps): JSX.Element => {
  const INITIAL_CHART_DATA = {
    labels: [],
    datasets: [{ label: "", data: 1 }],
  };

  return (
    <div>
      <h2>TODO</h2>
    </div>
  );
};

export default Chart;
