// React specific dependencies
import { useState } from "react";

// components
import Button from "./Button";

// React-Router
import { Link } from "react-router-dom";

// Interfaces/Types
import { LoginRegisterData } from "../interfaces/users";

// Auth
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = (): JSX.Element => {
  const REGISTER_INITIAL_STATE: LoginRegisterData = { email: "" };
  const [userData, setUserData] = useState<LoginRegisterData>(
    REGISTER_INITIAL_STATE
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { passwordReset } = useAuth();

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
    // post to firebase API for Password reset
    if (!userData.email) {
      setAlerts("Email is required to be able to reset your password.");
      setAlertClass("alert alert-danger");
      clearInputs();
      return;
    }

    setIsLoading(true);
    passwordReset(userData.email)
      .then(() => {
        setAlerts(
          "An email with instructions on resetting your password has been sent."
        );
        setAlertClass("alert alert-success");
      })
      .catch(() => {
        setAlerts("Error: Unable to reset password.");
        setAlertClass("alert alert-danger");
      });
    setIsLoading(false);
    clearInputs();
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card d-flex align-items-center w-100"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Reset Password</h2>
        <div className="container d-flex w-80 justify-content-center">
          {alerts && (
            <div className={alertClass} role="alert">
              {alerts}
            </div>
          )}
        </div>
        <form
          className="d-flex flex-column w-75 align-items-stretch justify-content-center py-2"
          onSubmit={handleFormSubmit}
          autoComplete="off"
        >
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className="form-control my-1"
            value={userData.email}
            onChange={handleInputChange}
          />
          <Button
            buttonText="Reset Password"
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
                <Link to="/login">Login.</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
