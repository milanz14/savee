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
      !formState.category
    ) {
      alert("You must provide transaction details before being able to save.");
      return;
    }
    const date = new Date();
    const newTransaction: Transaction = {
      id: uuidv4(),
      description: formState.description,
      category: formState.category,
      amount: formState.amount,
      date: date.toLocaleDateString(),
    };
    addTransaction(newTransaction);
    clearInputs();
    console.log(newTransaction);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card d-flex align-items-center w-100"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="py-4">Add New Transaction</h2>
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
          <input
            name="category"
            id="category"
            type="text"
            placeholder="What category does this fall into? ie. Shopping, Rent, etc."
            className="form-control my-1"
            value={formState.category}
            onChange={handleInputChange}
          />
          <input
            name="amount"
            id="amount"
            type="number"
            placeholder="The amount of the transaction"
            className="form-control my-1"
            step="0.01"
            value={formState.amount}
            onChange={handleInputChange}
          />
          <Button
            buttonText="Add Transaction"
            btnClass="btn btn-info my-2"
            isLoading={isLoading}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTransactionForm;
