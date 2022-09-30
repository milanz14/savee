interface TransasctionRowProps {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
  deleteTransaction: (id: string) => void;
}

const TransactionRow = ({
  id,
  category,
  description,
  amount,
  date,
  deleteTransaction,
}: TransasctionRowProps): JSX.Element => {
  //
  const handleDeleteTransaction = (id: string): void => {
    deleteTransaction(id);
  };

  return (
    <tr>
      <th>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteTransaction(id)}
        >
          x
        </button>
        {description}
      </th>
      <th>{category}</th>
      <th>{date}</th>
      <th style={{ color: amount > 0 ? "green" : "red" }}>${amount} </th>
    </tr>
  );
};

export default TransactionRow;
