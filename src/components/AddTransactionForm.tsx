// Node packages
import { v4 as uuidv4 } from "uuid";

// react imports
import { useState } from "react";

// components
import Button from "./Button";

// Interfaces and Types
import { Transaction } from "../interfaces/transactions";

// Validations
import { transactionSchema } from "../validations/UserValidation";

// library imports
import { useFormik } from "formik";

interface AddTransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

const AddTransactionForm = ({
  addTransaction,
}: AddTransactionFormProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const onSubmit = (values: Transaction, actions: any) => {
    setIsLoading(true);
    const date = new Date();
    if (values.type === "expense") {
      values.amount *= -1;
    }
    const newTransaction: Transaction = {
      id: uuidv4(),
      description: values.description,
      category: values.category,
      type: values.type,
      amount: values.amount,
      date: date.toLocaleDateString(),
    };
    addTransaction(newTransaction);
    setAlertClass("alert alert-success");
    setAlerts(`Successfully added ${newTransaction.description}`);
    setIsLoading(false);
    actions.resetForm();
    setTimeout(() => {
      setAlerts("");
      setAlertClass("");
    }, 2000);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        id: "",
        description: "",
        category: "",
        type: "",
        amount: 0,
        date: "",
      },
      validationSchema: transactionSchema,
      onSubmit,
    });

  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   setIsLoading(true);
  //   const date = new Date();
  //   if (values.type === "expense") {
  //     values.amount *= -1;
  //   }
  //   const newTransaction: Transaction = {
  //     id: uuidv4(),
  //     description: values.description,
  //     category: values.category,
  //     type: values.type,
  //     amount: values.amount,
  //     date: date.toLocaleDateString(),
  //   };
  //   addTransaction(newTransaction);
  //   setAlertClass("alert alert-success");
  //   setAlerts("Added successfully!");
  //   setIsLoading(false);
  //   setTimeout(() => {
  //     setAlerts("");
  //     setAlertClass("");
  //   }, 2000);
  // };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ): void => {
  //   const { name, value } = e.target;
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <div
        className="card d-flex align-items-center w-100 shadow"
        style={{ maxWidth: "800px" }}
      >
        <h2 className="py-2">Add Transaction</h2>
        <div className="container d-flex w-80 justify-content-center">
          {alerts && (
            <div className={alertClass} role="alert">
              {alerts}
            </div>
          )}
        </div>
        <form
          className="d-flex flex-column w-75 align-items-stretch justify-content-center py-1"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            name="description"
            id="description"
            type="text"
            placeholder="Describe your transaction"
            className={
              errors.description && touched.description
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && touched.description && (
            <p className="error">{errors.description}</p>
          )}
          <select
            name="category"
            id="category"
            className={
              errors.category && touched.category
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
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
          {errors.category && touched.category && (
            <p className="error">{errors.category}</p>
          )}
          <select
            name="type"
            id="type"
            className={
              errors.type && touched.type
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            value={values.type}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Transaction Type (Expense/Income)</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.type && touched.type && (
            <p className="error">{errors.type}</p>
          )}
          <input
            name="amount"
            id="amount"
            type="number"
            placeholder="$5.35"
            className={
              errors.amount && touched.amount
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            step="0.01"
            min="0.00"
            value={values.amount}
            onChange={handleChange}
          />
          {errors.amount && touched.amount && (
            <p className="error">{errors.amount}</p>
          )}
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
