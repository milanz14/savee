// Node packages
import { v4 as uuidv4 } from "uuid";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// react imports
import React, { useState } from "react";

// components
import Button from "./Button";

// Interfaces and Types
import { Transaction } from "../interfaces/transactions";

// validators:
// import { transactionSchema } from "../validations/UserValidation";

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

  // get the items required for the form validation
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm<Transaction>({
  //     resolver: yupResolver(transactionSchema),
  //   });

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
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearInputs = (): void => {
    setFormState(INITIAL_FORM_STATE);
  };

  return (
    <form
      className="form-control"
      onSubmit={handleFormSubmit}
      autoComplete="off"
    >
      <input
        name="description"
        id="description"
        type="text"
        placeholder="Describe your transaction"
        className="form-input"
        value={formState.description}
        onChange={handleInputChange}
      />
      <input
        name="category"
        id="category"
        type="text"
        placeholder="What category does this fall into? ie. Shopping, Rent, etc."
        className="form-input"
        value={formState.category}
        onChange={handleInputChange}
      />
      <input
        name="amount"
        id="amount"
        type="number"
        placeholder="The amount of the transaction"
        className="form-input"
        value={formState.amount}
        onChange={handleInputChange}
      />
      <Button buttonText="Add Transaction" />
    </form>
  );
};

export default AddTransactionForm;
