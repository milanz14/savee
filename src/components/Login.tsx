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
  const [errors, hasErrors] = useState<boolean>(false);

  const { login } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userData);
    // post to firebase API for Login
    if (!userData.email || !userData.password) {
      alert("Email and Password must be provided in order to log you in");
      return;
    }
  };

  return (
    <div className="login-container">
      <h3>It's nice to see you again. Log in below.</h3>
      <form
        className="form-control py-2"
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email... "
          className="form-input"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password... "
          className="form-input"
          value={userData.password}
          onChange={handleInputChange}
        />
        <Button
          buttonText="Login"
          isLoading={isLoading}
          btnClass="btn btn-primary"
        />
        <div>
          Not Registered?{" "}
          <span>
            <Link to="/register">Create an account.</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
