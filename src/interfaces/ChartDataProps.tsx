export interface ChartDataProps {
  labels: string[];
  datasets: {
    label: string;
    data: number;
  }[];
}
