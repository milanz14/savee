import TransactionRow from "./TransactionRow";

const TransactionsTable = ({
  transactions,
  deleteTransaction,
}: {
  transactions: any[];
  deleteTransaction: (id: string) => void;
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              id={transaction.id}
              category={transaction.category}
              description={transaction.description}
              amount={transaction.amount}
              date={transaction.date}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
