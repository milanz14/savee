import type { Transaction } from "../../interfaces/interfaces";

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
    <div className="bg-indigo-400 h-full">
      <h1>Transactions</h1>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.amount}</p>
          <p>{transaction.category}</p>
          {/* <p>{transaction.date}</p> */}
          <p>{transaction.description}</p>
          <p>{transaction.transactionType}</p>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
