import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LoginRegisterData } from "../interfaces/users";

const Login = (): JSX.Element => {
  const LOGIN_INITIAL_STATE: LoginRegisterData = { email: "", password: "" };
  const [userData, setUserData] =
    useState<LoginRegisterData>(LOGIN_INITIAL_STATE);

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
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email... "
          className="input"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password... "
          className="input"
          value={userData.password}
          onChange={handleInputChange}
        />
        <Button buttonText="Login" />
      </form>
      <div>
        Don't have an account? Register{" "}
        <span>
          <Link to="/register">here.</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
