import React from "react";
import "../styles/TransactionRow.css";

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
  //
  const handleDeleteTransaction = (id: string): void => {
    deleteTransaction(id);
  };

  return (
    <tr>
      <th>{description}</th>
      <th>{category}</th>
      <th>{date}</th>
      <th style={{ color: amount > 0 ? "green" : "red" }}>
        ${amount}{" "}
        <button disabled={true} className="btn-edit">
          Edit
        </button>
        <button className="btn-del" onClick={() => handleDeleteTransaction(id)}>
          x
        </button>
      </th>
    </tr>
  );
};

export default TransactionRow;
