export interface DataSets {
  label: string;
  data: number[];
  backgroundColor: string[];
}

export interface ChartDataInterface {
  labels: string[];
  datasets: DataSets[];
}
