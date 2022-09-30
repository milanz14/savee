// React specific dependencies
import { useState } from "react";

// React-Router
import { Link, useRouteLoaderData } from "react-router-dom";

// Components
import Button from "./Button";

// Interfaces/types
import { LoginRegisterData } from "../interfaces/users";

// Auth
import { useAuth } from "../contexts/AuthContext";

// styles
import "../styles/Form.css";

// library imports

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
  const { register, currentUser } = useAuth();

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
    if (!userData.name || !userData.email || !userData.password) {
      alert("Must submit a complete form in order to register.");
      clearInputs();
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords must match!");
      clearInputs();
      return;
    }

    setIsLoading(true);
    register(userData.email, userData.password)
      .then((res: any) => {
        console.log(`Success: ${res}`);
      })
      .catch((err: any) => {
        console.log(err);
        alert("Failed to Create an account");
      });
    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <h3>We look forward to you using our service. Register below.</h3>
      <form
        className="form-control"
        onSubmit={handleFormSubmit}
        autoComplete="off"
      >
        <input
          name="name"
          id="name"
          type="text"
          placeholder="First Name... "
          className="form-input"
          onChange={handleInputChange}
          value={userData.name}
        />
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email... "
          className="form-input"
          onChange={handleInputChange}
          value={userData.email}
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password... "
          className="form-input"
          onChange={handleInputChange}
          value={userData.password}
        />
        <input
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password... "
          className="form-input"
          onChange={handleInputChange}
          value={userData.confirmPassword}
        />
        <Button buttonText="Register" isLoading={isLoading} />
        <div>
          Have an accouunt?{" "}
          <span>
            <Link to="/login">Sign in here.</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
