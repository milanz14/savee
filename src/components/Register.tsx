// React specific dependencies
import { useState } from "react";

// React-Router
import { Link } from "react-router-dom";

// Components
import Button from "./Button";

// Interfaces/types
import { LoginRegisterData } from "../interfaces/users";

// validation
import { registerSchema } from "../validations/UserValidation";

// styles
import "../styles/Form.css";

const Register = () => {
  const REGISTER_INITIAL_STATE: LoginRegisterData = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState<LoginRegisterData>(
    REGISTER_INITIAL_STATE
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // post to Firebase API for Registration
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
          type="email"
          placeholder="First Name... "
          className="form-input"
        />
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email... "
          className="form-input"
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password... "
          className="form-input"
        />
        <Button buttonText="Register" />
        <div>
          Already Registered? Sign in{" "}
          <span>
            <Link to="/login">here.</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
