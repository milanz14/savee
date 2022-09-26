import React from "react";
import "../styles/TransactionRow.css";

import { Transaction } from "../interfaces/transactions";

interface TransasctionRowProps {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
  deleteTransaction: (id: string) => void;
}

const TransactionRow = ({
  id,
  category,
  description,
  amount,
  date,
  deleteTransaction,
}: TransasctionRowProps): JSX.Element => {
  const handleDeleteTransaction = (): void => {
    //
  };

  return (
    <tr>
      <th>
        <button className="btn" onClick={handleDeleteTransaction}>
          X
        </button>
        {description}
      </th>
      <th>{category}</th>
      <th>{date}</th>
      <th style={{ color: amount > 0 ? "green" : "red" }}>${amount}</th>
    </tr>
  );
};

export default TransactionRow;
