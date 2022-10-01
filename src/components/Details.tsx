// React imports
import { useEffect, useState, useRef, useReducer } from "react";

// Components
import TransactionRow from "./TransactionRow";
import AddTransactionForm from "./AddTransactionForm";

// import { listReducer } from "../reducers/listReducer";

// interfaces and types
import { Transaction } from "../interfaces/transactions";

// library packages imports
import { useDownloadExcel } from "react-export-table-to-excel";

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
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <AddTransactionForm addTransaction={addTransaction} />
      {/* <button onClick={onDownload} className="btn-export">
        Export Data
      </button> */}
      <div>
        <span className="text-light">
          You currently have {transactions.length}{" "}
          {transactions.length === 1 ? "transaction" : "transactions"} saved.
        </span>
      </div>
      <div className="table-responsive" style={{ maxWidth: "1600px" }}>
        <table
          className="table table-light table-striped table-hover table-sm border"
          ref={tableRef}
        >
          <thead className="table-primary">
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                deleteTransaction={deleteTransaction}
                {...transaction}
              />
            ))}
          </tbody>
          {transactions && (
            <tfoot>
              <tr className="table-light">
                <th colSpan={3}>Total Saved: </th>
                <td
                  style={{
                    color: total ? (total > 0 ? "green" : "red") : "black",
                  }}
                  colSpan={2}
                >
                  ${total}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default Details;
