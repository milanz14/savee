import { type Transaction } from "../../interfaces/interfaces";

const ArrowDown = () => (
  <svg
    width="13"
    height="13"
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
    width="13"
    height="13"
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

  const amountColor = isIncome ? "text-emerald-400" : "text-red-400";

  const iconBg = isIncome
    ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
    : "bg-red-500/10 text-red-400 ring-1 ring-red-500/20";

  const badgeStyle = isIncome
    ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
    : "bg-red-500/10 text-red-400 ring-1 ring-red-500/20";

  const prefix = isIncome ? "+" : "-";

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(transaction.amount);

  return (
    <div
      className="
      bg-neutral-900 border border-neutral-800/80 rounded-xl p-4
      mx-auto my-1.5 w-full max-w-xl
      hover:bg-neutral-800/60 hover:border-neutral-700/80
      transition-all duration-150 cursor-default
    ">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
          {isIncome ? <ArrowUp /> : <ArrowDown />}
        </div>

        {/* Description + category */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-neutral-100 truncate leading-tight">
            {transaction.description}
          </p>
          <p className="text-xs text-neutral-500 mt-0.5 truncate">
            {transaction.category}
          </p>
        </div>

        {/* Amount */}
        <span
          className={`text-sm font-semibold tabular-nums shrink-0 ${amountColor}`}>
          {prefix}
          {formattedAmount}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-800/60">
        <span className="text-xs text-neutral-600">{transaction.date}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${badgeStyle}`}>
          {transaction.transactionType}
        </span>
      </div>
    </div>
  );
};

export default TransactionCard;
