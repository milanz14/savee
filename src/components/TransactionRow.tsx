// Library Imports
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Components
import { Tooltip } from "./Tooltip";

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
      <th>{description}</th>
      <th>{category}</th>
      <th>{date}</th>
      <th style={{ color: amount > 0 ? "green" : "red" }}>${amount} </th>
      <th>
        <Tooltip text="Delete">
          <button
            type="button"
            className="btn btn-danger mx-4"
            onClick={() => handleDeleteTransaction(id)}
          >
            x
          </button>
        </Tooltip>
      </th>
    </tr>
  );
};

export default TransactionRow;
