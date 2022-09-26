import { useState } from "react";

import { Transaction } from "../interfaces/transactions";

const Details = (): JSX.Element => {
  // transactions include: description: string, category: string, date: Date, amount: number
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  return <div>Details</div>;
};

export default Details;
