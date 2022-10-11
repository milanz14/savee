// React specific dependencies
import { useState } from "react";

// components
import Button from "./Button";

// React-Router
import { Link, useNavigate } from "react-router-dom";

// Interfaces/Types
import { LoginRegisterData } from "../interfaces/users";

// Auth
import { useAuth } from "../contexts/AuthContext";

// Validations
import { loginSchema } from "../validations/UserValidation";

// library imports
import { useFormik } from "formik";

const Login = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { login } = useAuth();

  const navigate = useNavigate();

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = e.target;
  //   setUserData((data) => ({
  //     ...data,
  //     [name]: value,
  //   }));
  // };

  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   // post to firebase API for Login
  //   if (!userData.email || !userData.password) {
  //     setAlerts("Email and Password must be provided in order to log in.");
  //     setAlertClass("alert alert-danger");
  //     clearInputs();
  //     return;
  //   }
  //   setIsLoading(true);
  //   login(userData.email, userData.password)
  //     .then(() => {
  //       setAlerts("Logged in successfully");
  //       setAlertClass("alert alert-success");
  //       navigate("/dashboard");
  //     })
  //     .catch(() => {
  //       setAlerts("Unable to log in. Incorrect username or password");
  //       setAlertClass("alert alert-danger");
  //     });
  //   setIsLoading(false);
  //   clearInputs();
  // };

  const onSubmit = (values: LoginRegisterData, actions: any) => {
    setIsLoading(true);
    login(values.email, values.password)
      .then(() => {
        setAlerts("Logged in successfully");
        setAlertClass("alert alert-success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err: any) => {
        setAlerts("Failed to log in.");
        setAlertClass("alert alert-danger");
      });
    setIsLoading(false);
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "75vh" }}
    >
      <div
        className="card d-flex align-items-center w-100 shadow-box py-5"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Login</h2>
        <div className="container d-flex w-80 justify-content-center">
          {alerts && (
            <div className={alertClass} role="alert">
              {alerts}
            </div>
          )}
        </div>
        <form
          className="d-flex flex-column w-75 align-items-stretch justify-content-center py-2"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className={
              errors.email && touched.email
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className={
              errors.password && touched.password
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
          <Button
            buttonText="Login"
            isLoading={isLoading}
            btnClass="btn btn-primary"
          />
          <div className="d-flex flex-column align-items-center">
            <div className="mt-2">
              Not Registered?{" "}
              <span>
                <Link to="/register">Create an account.</Link>
              </span>
            </div>
            <div className="mt-2">
              <span>
                <Link to="/password-reset">Forgot Password?</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
