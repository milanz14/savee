import { useEffect, useState, useRef } from "react";

import { Transaction } from "../interfaces/transactions";

import TransactionRow from "./TransactionRow";
import AddTransactionForm from "./AddTransactionForm";
import "../styles/TransactionRow.css";

const Details = (): JSX.Element => {
  // transactions include: description: string, category: string, date: Date, amount: number
  const tableRef = useRef(null);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const computeTotals = (): void => {
      const totals = transactions.reduce((total, obj) => {
        return total + Number(obj.amount);
      }, 0);
      setTotal(totals);
    };
    computeTotals();
  }, [transactions]);

  const addTransaction = (transaction: Transaction): void => {
    const newTransaction = transaction;
    setTransactions((transactions) => [newTransaction, ...transactions]);
  };

  const deleteTransaction = (id: string): void => {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(newTransactions);
  };

  return (
    <div className="details-container">
      <h4>Welcome Back! Your transactions are below: </h4>
      <AddTransactionForm addTransaction={addTransaction} />
      <div className="transactions-container">
        <table className="table" ref={tableRef}>
          <tbody>
            <tr>
              <th className="table-header">Description</th>
              <th className="table-header">Category</th>
              <th className="table-header">Date</th>
              <th className="table-header">Amount</th>
            </tr>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                deleteTransaction={deleteTransaction}
                {...transaction}
              />
            ))}
          </tbody>
          <tfoot>
            <tr className="total">
              <th colSpan={3}>Total Saved: </th>
              <td
                style={{
                  color: total ? (total > 0 ? "green" : "red") : "black",
                }}
              >
                ${total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Details;
