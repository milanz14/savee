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
    <tr className="alert" role="alert">
      <td>{description}</td>
      <td>{category}</td>
      <td>{date}</td>
      <td style={{ color: amount > 0 ? "green" : "red" }}>${amount} </td>
      <td className="d-flex justify-content-center">
        <Tooltip text="Delete">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDeleteTransaction(id)}
          >
            <i className="fa fa-close"></i>
          </button>
        </Tooltip>
      </td>
    </tr>
  );
};

export default TransactionRow;
