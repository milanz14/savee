import React from "react";
import "../styles/TransactionRow.css";

interface TransasctionRowProps {
  category: string;
  description: string;
  amount: number;
  date: string;
}

const TransactionRow = ({
  category,
  description,
  amount,
  date,
}: TransasctionRowProps): JSX.Element => {
  return (
    <tr>
      <th>{description}</th>
      <th>{category}</th>
      <th>{date}</th>
      <th style={{ color: amount > 0 ? "green" : "red" }}>{amount}</th>
    </tr>
  );
};

export default TransactionRow;
