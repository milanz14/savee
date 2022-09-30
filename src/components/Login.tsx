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

const Login = (): JSX.Element => {
  const LOGIN_INITIAL_STATE: LoginRegisterData = { email: "", password: "" };
  const [userData, setUserData] =
    useState<LoginRegisterData>(LOGIN_INITIAL_STATE);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("alert alert-primary");
  const [errors, hasErrors] = useState<boolean>(false);

  const { login, currentUser } = useAuth();

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
      alert("Email and Password must be provided in order to log you in");
      return;
    }

    setIsLoading(true);
    login(userData.email, userData.password)
      .then((res: any) => {
        console.log(`Successfully logged in: ${res}`);
      })
      .catch((err: any) => {
        console.log(err);
        alert("Login Error");
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
        {alerts && (
          <div className={alertClass} role="alert">
            {alerts}
          </div>
        )}
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
