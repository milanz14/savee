export interface Transaction {
  userId?: string;
  id: string;
  description: string;
  category: string;
  type: string;
  amount: number;
  date: string;
}
