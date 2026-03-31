import type { Transaction } from "../../interfaces/interfaces";

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div key={transaction.id}>
      <p>{transaction.amount}</p>
      <p>{transaction.category}</p>
      {/* <p>{transaction.date}</p> */}
      <p>{transaction.description}</p>
      <p>{transaction.transactionType}</p>
    </div>
  );
};

export default TransactionCard;
