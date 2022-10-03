// React specific dependencies
import { useState } from "react";

// React-Router
import { Link, useNavigate } from "react-router-dom";

// Components
import Button from "./Button";

// Interfaces/types
import { LoginRegisterData } from "../interfaces/users";

// Auth
import { useAuth } from "../contexts/AuthContext";

// library imports
import { useFormik } from "formik";

const Register = () => {
  const REGISTER_INITIAL_STATE: LoginRegisterData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState<LoginRegisterData>(
    REGISTER_INITIAL_STATE
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { register } = useAuth();

  const navigate = useNavigate();

  // desctructure the methods required from Formik
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {},
  });

  const clearInputs = (): void => {
    setUserData(REGISTER_INITIAL_STATE);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // post to Firebase API for Registration
    if (!values.name || !values.email || !values.password) {
      setAlerts("Error. A completed form is required to register.");
      setAlertClass("alert alert-danger");
      clearInputs();
      return;
    }

    if (values.password !== values.confirmPassword) {
      setAlerts("Passwords do not match.");
      setAlertClass("alert alert-danger");
      clearInputs();
      return;
    }

    setIsLoading(true);
    register(userData.email, userData.password)
      .then(() => {
        setAlerts("Successfully signed up!");
        setAlertClass("alert alert-success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch(() => {
        setAlerts("Failed to Create an account");
        setAlertClass("alert alert-danger");
      });
    setIsLoading(false);
    clearInputs();
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div
        className="card d-flex align-items-center w-100"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Register</h2>
        <div className="container d-flex w-80 justify-content-center">
          {alerts && (
            <div className={alertClass} role="alert">
              {alerts}
            </div>
          )}
        </div>
        <form
          onSubmit={handleFormSubmit}
          autoComplete="off"
          className="d-flex flex-column w-75 align-items-stretch justify-content-center py-2"
        >
          <input
            name="name"
            id="name"
            type="text"
            placeholder="First Name"
            className="form-control my-1"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className="form-control my-1"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="form-control my-1"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="form-control my-1"
            onChange={handleChange}
            value={values.confirmPassword}
            onBlur={handleBlur}
          />
          <Button
            buttonText="Register"
            isLoading={isLoading}
            btnClass="btn btn-primary my-2"
          />
          <div className="d-flex justify-content-center">
            <div className="mt-2">
              Have an account?{" "}
              <span>
                <Link to="/login">Sign in here.</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
