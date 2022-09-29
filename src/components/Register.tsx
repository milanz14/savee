// React specific dependencies
import { useState } from "react";

// React-Router
import { Link } from "react-router-dom";

// Components
import Button from "./Button";

// Interfaces/types
import { LoginRegisterData } from "../interfaces/users";

// styles
import "../styles/Form.css";

// library imports

const Register = () => {
  const REGISTER_INITIAL_STATE: LoginRegisterData = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState<LoginRegisterData>(
    REGISTER_INITIAL_STATE
  );

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
      return;
    }
    console.log(userData);
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
        <Button buttonText="Register" />
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
