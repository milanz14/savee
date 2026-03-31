import { FaSpinner } from "react-icons/fa";
import type { Transaction } from "../../interfaces/interfaces";
import TransactionCard from "./TransactionCard";

const Transactions = ({
  transactions,
  isPending,
  isError,
}: {
  transactions: Transaction[];
  isPending: boolean;
  isError: boolean;
}) => {
  //
  return (
    <>
      {isError && <p>Error</p>}
      {!isError && (
        <div className="bg-indigo-400 h-full my-4">
          <h1>Transactions</h1>
          {isPending ? (
            <span>
              <FaSpinner className="animate-spin" />
            </span>
          ) : (
            transactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Transactions;
