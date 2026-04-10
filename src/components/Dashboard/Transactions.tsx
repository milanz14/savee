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
  return (
    <>
      {isError && (
        <div className="flex items-center justify-center h-full">
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        </div>
      )}
      {!isError && (
        <div className="bg-white h-full rounded-2xl flex flex-col overflow-hidden">
          {isPending ? (
            <div className="flex justify-center items-center flex-1">
              <FaSpinner className="animate-spin text-neutral-500 text-xl" />
            </div>
          ) : (
            <div className="flex flex-col min-h-0 flex-1">
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-neutral-800/60">
                <div className="max-w-xl mx-auto flex items-center justify-between">
                  <div>
                    <h1 className="text-lg font-semibold text-indigo-600 tracking-tight">
                      Transactions
                    </h1>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {transactions.length} record
                      {transactions.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>

              {/* List */}
              <div className="overflow-auto flex-1 min-h-0 scrollbar-hide px-4 py-3">
                {transactions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-neutral-600 gap-2 pt-16">
                    <span className="text-3xl">⟳</span>
                    <p className="text-sm">No transactions yet</p>
                  </div>
                ) : (
                  transactions.map((transaction) => (
                    <TransactionCard
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Transactions;
