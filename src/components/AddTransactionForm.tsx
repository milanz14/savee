// Node packages
import { v4 as uuidv4 } from "uuid";

// react imports
import { useState } from "react";

// components
import Button from "./Button";

// Interfaces and Types
import { Transaction } from "../interfaces/transactions";
import { AddTransactionFormProps } from "../interfaces/TransactionForm";

// Validations
import { transactionSchema } from "../validations/UserValidation";

// library imports
import { useFormik } from "formik";

// auth
import { useAuth } from "../contexts/AuthContext";
import { transactionsCollection } from "../config/firebase";

const AddTransactionForm = ({
  getTransactionsFromFB,
}: AddTransactionFormProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { currentUser } = useAuth();

  const onSubmit = (values: Transaction, actions: any) => {
    setIsLoading(true);
    let date = formatDate(new Date().toLocaleDateString());

    if (values.type === "expense") {
      values.amount *= -1;
    }
    const newTransaction: Transaction = {
      userId: currentUser.uid,
      id: uuidv4(),
      description: values.description,
      category: values.category,
      type: values.type,
      amount: values.amount,
      date: date,
    };
    // add the transaction to the Firestore
    transactionsCollection.add(newTransaction);

    actions.resetForm();
    setTimeout(() => {
      setAlerts("");
      setAlertClass("");
    }, 2000);
    setIsLoading(false);

    getTransactionsFromFB();
  };

  // set initial data for form validation
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

  // format the date based on when the transaction is created
  const formatDate = (date: string): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const splitDate = date.split("/");
    // get the month - convert to number and get the str name based on idx position
    const month = months[Number(splitDate[0]) - 1];
    splitDate[2] = splitDate[2].slice(2);
    splitDate[0] = splitDate[0].replace(splitDate[0], month);
    return splitDate.join("/");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <div
        className="card d-flex align-items-center w-100 shadow-box py-5"
        style={{ maxWidth: "95%" }}>
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
          autoComplete="off">
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
            onBlur={handleBlur}>
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
            onBlur={handleBlur}>
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
