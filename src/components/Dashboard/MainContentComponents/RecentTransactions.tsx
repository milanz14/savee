import type { Transaction } from "../../../interfaces/interfaces";

const RecentTransactions = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div className="h-full border border-[#818cf8] rounded-lg shadow-2xl bg-amber-500 transition-all duration-200  hover:-translate-y-1  hover:shadow-md">
      <h1>Recent Transactions</h1>
      {transactions.map((transaction) => (
        <p key={transaction.id}>
          {transaction.amount} - {transaction.description}
        </p>
      ))}
    </div>
  );
};

export default RecentTransactions;
