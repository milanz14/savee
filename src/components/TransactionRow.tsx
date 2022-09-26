import React from "react";

interface TransasctionRowProps {
  category: string;
  description: string;
  amount: number;
}

const TransactionRow = ({
  category,
  description,
  amount,
}: TransasctionRowProps): JSX.Element => {
  return (
    <tr>
      <th>{category}</th>
      <th>{description}</th>
      <th>{amount}</th>
    </tr>
  );
};

export default TransactionRow;
