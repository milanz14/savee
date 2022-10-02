// Node packages
import { v4 as uuidv4 } from "uuid";

// react imports
import React, { useState } from "react";

// components
import Button from "./Button";

// Interfaces and Types
import { Transaction } from "../interfaces/transactions";

interface AddTransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const AddTransactionForm = ({
  addTransaction,
}: AddTransactionFormProps): JSX.Element => {
  const INITIAL_FORM_STATE = {
    id: "",
    description: "",
    category: "",
    type: "",
    amount: 0,
    date: "",
  };
  const [formState, setFormState] = useState<Transaction>(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const clearInputs = (): void => {
    setFormState(INITIAL_FORM_STATE);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      formState.amount === 0 ||
      !formState.description ||
      !formState.category ||
      !formState.type
    ) {
      alert("You must complete all fields before adding a transaction.");
      return;
    }
    setIsLoading(true);
    const date = new Date();
    if (formState.type === "expense") {
      formState.amount *= -1;
    }
    const newTransaction: Transaction = {
      id: uuidv4(),
      description: formState.description,
      category: formState.category,
      type: formState.type,
      amount: formState.amount,
      date: date.toLocaleDateString(),
    };
    addTransaction(newTransaction);
    clearInputs();
    setIsLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "50vh" }}
    >
      <div
        className="card d-flex align-items-center w-100"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="py-2">Add New Transaction</h2>
        <form
          className="d-flex flex-column w-75 align-items-stretch justify-content-center py-1"
          onSubmit={handleFormSubmit}
          autoComplete="off"
        >
          <input
            name="description"
            id="description"
            type="text"
            placeholder="Describe your transaction"
            className="form-control my-1"
            value={formState.description}
            onChange={handleInputChange}
          />
          <select
            name="category"
            id="category"
            className="form-select my-1"
            value={formState.category}
            onChange={handleInputChange}
          >
            <option>Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Other Income">Other Income</option>
            <option value="Housing">Housing</option>
            <option value="Groceries/Food">Groceries/Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Medical">Medical</option>
            <option value="Debt Payments">Debt Payments</option>
            <option value="Misc Spending">Misc Spending</option>
          </select>
          <select
            name="type"
            id="type"
            className="form-select my-1"
            value={formState.type}
            onChange={handleInputChange}
          >
            <option>Transaction Type (Expense/Income)</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            name="amount"
            id="amount"
            type="number"
            placeholder="$5.35"
            className="form-control my-1"
            step="0.01"
            min="0.00"
            value={formState.amount}
            onChange={handleInputChange}
          />
          <Button
            buttonText="Add Transaction"
            btnClass="btn btn-primary my-2"
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
