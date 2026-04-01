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
        <div className="bg-zinc-400 h-full rounded-2xl">
          {isPending ? (
            <span className="flex justify-center">
              <FaSpinner className="animate-spin" />
            </span>
          ) : (
            <div className="px-4">
              <h1 className="pt-7 text-2xl max-w-2xl mx-auto">
                All Transactions
              </h1>
              {transactions.map((transaction) => (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Transactions;
