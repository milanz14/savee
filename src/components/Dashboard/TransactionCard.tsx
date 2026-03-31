import { type Transaction } from "../../interfaces/interfaces";

const ArrowDown = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

const ArrowUp = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const isIncome = transaction.transactionType === "income";

  const amountColor = isIncome
    ? "text-green-600 dark:text-green-400"
    : "text-red-600 dark:text-red-400";
  const iconBg = isIncome
    ? "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400"
    : "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400";
  const badgeStyle = isIncome
    ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300"
    : "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300";
  const prefix = isIncome ? "" : "-";

  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 mx-8 min-w-50 my-2 hover:scale-102 transition-transform">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
            {isIncome ? <ArrowUp /> : <ArrowDown />}
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 leading-tight">
              {transaction.description}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {transaction.category}
            </p>
          </div>
        </div>
        <span
          className={`text-base font-medium tabular-nums ${amountColor} shrink-0 ml-2`}>
          {prefix}${transaction.amount}
        </span>
      </div>

      <div className="flex justify-between items-center pt-2.5 border-t border-neutral-100 dark:border-neutral-800">
        <span className="text-xs text-neutral-400 dark:text-neutral-500">
          {transaction.date}
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${badgeStyle}`}>
          {transaction.transactionType}
        </span>
      </div>
    </div>
  );
};

export default TransactionCard;
