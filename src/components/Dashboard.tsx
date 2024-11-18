// React imports
import { useEffect, useState, useRef } from "react";

// Components
// import TransactionRow from "./TransactionRow";
import TransactionsTable from "./TransactionsTable";
import AddTransactionForm from "./AddTransactionForm";
import Chart from "./Chart";
import { Tooltip } from "./Tooltip";

// import { listReducer } from "../reducers/listReducer";

// interfaces and types
import { Transaction } from "../interfaces/transactions";
import { SortedByCategory } from "../interfaces/CategorySorted";

// firebase imports
import { db } from "../config/firebase";

// auth
import { useAuth } from "../contexts/AuthContext";

// library packages imports
import { useDownloadExcel } from "react-export-table-to-excel";

// style overrides
import "../styles/dashboard.css";

const Dashboard = (): JSX.Element => {
  // transactions include: description: string, category: string, date: Date, amount: number
  const tableRef = useRef(null);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categorySorted, setCategorySorted] = useState<SortedByCategory[]>([]);

  // const [list, dispatchList] = useReducer(listReducer, transactions);

  const [total, setTotal] = useState<number | null>(null);

  const [currentTab, setCurrentTab] = useState<string>("table");

  const { currentUser } = useAuth();

  useEffect(() => {
    const computeTotals = (): void => {
      const totals = transactions.reduce((total, obj) => {
        return total + Number(obj.amount);
      }, 0);
      setTotal(Number(totals.toFixed(2)));
    };
    computeTotals();
    computeTotalsByCategory(transactions);
  }, [transactions]);

  useEffect(() => {
    getTransactionsFromFB();
  }, []);

  const computeTotalsByCategory = (transactions: Transaction[]) => {
    const reducedData: { [key: string]: number } = {};
    for (const transaction of transactions) {
      const { category, amount } = transaction;
      if (!reducedData[category]) {
        reducedData[category] = amount;
      } else {
        reducedData[category] = reducedData[category] + amount;
      }
    }
    let reducedDataArray = [];
    for (const key in reducedData) {
      reducedDataArray.push({ category: key, amount: reducedData[key] });
    }
    setCategorySorted(reducedDataArray);
  };

  const getTransactionsFromFB = () => {
    const getFromFirebase = db
      .collection("transactions")
      .where("userId", "==", currentUser.uid);
    getFromFirebase.onSnapshot((querySnapshot) => {
      const saveFirebaseTransactions: Transaction[] = [];
      querySnapshot.forEach((doc) => {
        saveFirebaseTransactions.push(doc.data() as Transaction);
      });
      /* TODO - sort the transactions by date so that they show 
      up with the newest transaction at the top of the table */
      setTransactions(saveFirebaseTransactions as Transaction[]);
    });
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "MyTransactions",
    sheet: "Transactions",
  });

  const deleteTransaction = (id: string): void => {
    const getFromFB = db.collection("transactions").where("id", "==", id);
    getFromFB.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.ref.delete());
    });
    getTransactionsFromFB();
  };

  const alertMessage = () => {
    alert("No transactions to export");
  };

  return (
    <div className="container h-100 d-flex flex-column align-items-center justify-content-start">
      <AddTransactionForm getTransactionsFromFB={getTransactionsFromFB} />
      <div
        className="container d-flex align-items-center justify-content-center my-2"
        style={{ maxWidth: "95%" }}>
        <div className="card align-items-center w-100 shadow-box py-2">
          <div className="mb-4">
            <span className="text-dark">
              You have {transactions.length} logged{" "}
              {transactions.length === 1 ? "transaction" : "transactions"}.
            </span>
          </div>
          <div className="mb-2">
            <button
              className="btn btn-warning mr-2"
              disabled={currentTab === "table"}
              onClick={() => setCurrentTab("table")}>
              Table
            </button>
            <button
              className="btn btn-warning ml-2"
              disabled={currentTab === "chart"}
              onClick={() => setCurrentTab("chart")}>
              Chart
            </button>
          </div>
          <Tooltip
            text={
              transactions.length > 0
                ? "Export My Transactions"
                : "You have nothing to export"
            }>
            <button
              onClick={transactions.length > 0 ? onDownload : alertMessage}
              // disabled={transactions.length < 1}
              className="btn btn-export btn-success"
              style={{ width: "50%" }}>
              Export My Data
            </button>
          </Tooltip>
        </div>
      </div>
      {currentTab === "table" ? (
        <div
          className="table-responsive rounded-3 w-100 mt-2 d-flex flex-column align-items-center"
          style={{ maxWidth: "95%" }}>
          {/* <table
            className="h-50 table table-secondary table-striped table-hover table-sm border shadow"
            ref={tableRef}
            style={{ maxWidth: "95%" }}>
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
            <tfoot className="rounded-bottom">
              <tr className="table-light">
                <th colSpan={3}>Total Saved: </th>
                <td
                  style={{
                    color: total ? (total > 0 ? "green" : "red") : "black",
                  }}
                  colSpan={2}>
                  ${total}
                </td>
              </tr>
            </tfoot>
          </table> */}
          <TransactionsTable
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
      ) : (
        <div
          className="h-50 overflow-auto rounded-3"
          style={{ maxWidth: "1600px" }}>
          <Chart data={categorySorted} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
