import type { Transaction } from "../../interfaces/interfaces";

const Transactions = ({ transactions }: { transactions: Transaction[] }) => {
  //
  return (
    <div>
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
