import { Transaction } from "../interfaces/transactions";

interface AddTransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const AddTransactionForm = (): JSX.Element => {
  return <div>AddTransactionForm</div>;
};

export default AddTransactionForm;
