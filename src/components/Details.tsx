// React imports
import { useEffect, useState, useRef, useReducer } from "react";

// Components
import TransactionRow from "./TransactionRow";
import AddTransactionForm from "./AddTransactionForm";

// import { listReducer } from "../reducers/listReducer";

// interfaces and types
import { Transaction } from "../interfaces/transactions";

// styles
import "../styles/TransactionRow.css";

// library packages imports
import { useDownloadExcel } from "react-export-table-to-excel";

// styles
import "../styles/details.css";

const Details = (): JSX.Element => {
  // transactions include: description: string, category: string, date: Date, amount: number
  const tableRef = useRef(null);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // const [list, dispatchList] = useReducer(listReducer, transactions);

  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const computeTotals = (): void => {
      const totals = transactions.reduce((total, obj) => {
        return total + Number(obj.amount);
      }, 0);
      setTotal(Number(totals.toFixed(2)));
    };
    computeTotals();
  }, [transactions]);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "MyTransactions",
    sheet: "Transactions",
  });

  const addTransaction = (transaction: Transaction): void => {
    const newTransaction = transaction;
    setTransactions((transactions) => [newTransaction, ...transactions]);
  };

  const deleteTransaction = (id: string): void => {
    // if using the reducer, use the code commented out below:
    // dispatchList({ type: "REMOVE", id });
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(newTransactions);
  };

  return (
    <div className="details-container">
      <div></div>
      <h4>Welcome Back! Your transactions are below: </h4>
      <AddTransactionForm addTransaction={addTransaction} />
      {/* <button onClick={onDownload} className="btn-export">
        Export Data
      </button> */}
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
              <th colSpan={4}>Total Saved: </th>
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
