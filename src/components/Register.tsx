import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LoginRegisterData } from "../interfaces/users";

const Register = () => {
  const INITIAL_STATE: LoginRegisterData = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState<LoginRegisterData>(INITIAL_STATE);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="First Name... "
          className="input"
        />
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email... "
          className="input"
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password... "
          className="input"
        />
        <Button buttonText="Register" />
      </form>
      <div>
        Already Registered? Sign in{" "}
        <span>
          <Link to="/">here.</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
