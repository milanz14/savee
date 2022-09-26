import { useState } from "react";

import { Transaction } from "../interfaces/transactions";

import TransactionRow from "./TransactionRow";

const Details = (): JSX.Element => {
  // transactions include: description: string, category: string, date: Date, amount: number
  const SAMPLE_TRANSACTIONS: Transaction[] = [
    {
      id: "asdf1234",
      description: "lorem",
      category: "lorem",
      amount: 25,
    },
    {
      id: "asdf12345",
      description: "loremipsum",
      category: "loremipsum",
      amount: 33.86,
    },
  ];
  const [transactions, setTransactions] =
    useState<Transaction[]>(SAMPLE_TRANSACTIONS);

  return (
    <>
      <table>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} {...transaction} />
        ))}
      </table>
    </>
  );
};

export default Details;
