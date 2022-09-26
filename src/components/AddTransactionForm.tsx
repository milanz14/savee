import { Transaction } from "../interfaces/transactions";

interface AddTransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const AddTransactionForm = ({
  addTransaction,
}: AddTransactionFormProps): JSX.Element => {
  return <div>AddTransactionForm</div>;
};

export default AddTransactionForm;
