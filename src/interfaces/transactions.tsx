export interface Transaction {
  uid?: string;
  id: string;
  description: string;
  category: string;
  type: string;
  amount: number;
  date: string;
}
