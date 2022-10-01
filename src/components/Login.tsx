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

const Login = (): JSX.Element => {
  const LOGIN_INITIAL_STATE: LoginRegisterData = { email: "", password: "" };
  const [userData, setUserData] =
    useState<LoginRegisterData>(LOGIN_INITIAL_STATE);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { login, currentUser } = useAuth();

  const navigate = useNavigate();

  const clearInputs = (): void => {
    setUserData(LOGIN_INITIAL_STATE);
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
    // post to firebase API for Login
    if (!userData.email || !userData.password) {
      setAlerts("Email and Password must be provided in order to log in.");
      setAlertClass("alert alert-danger");
      clearInputs();
      return;
    }

    setIsLoading(true);
    login(userData.email, userData.password)
      .then((res: any) => {
        setAlerts("Logged in successfully");
        setAlertClass("alert alert-success");
        navigate("/dashboard");
      })
      .catch((err: any) => {
        setAlerts("Unable to log in. Incorrect username or password");
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
        <h2 className="py-4">Login</h2>
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
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="form-control my-1"
            value={userData.password}
            onChange={handleInputChange}
          />
          <Button
            buttonText="Login"
            isLoading={isLoading}
            btnClass="btn btn-primary"
          />
          <div className="mt-2">
            Not Registered?{" "}
            <span>
              <Link to="/register">Create an account.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
