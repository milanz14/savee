import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

import { UserData } from "../interfaces/users";

const Login = (): JSX.Element => {
  const INITIAL_STATE: UserData = { name: "", password: "" };
  const [userData, setUserData] = useState<UserData>(INITIAL_STATE);

  return (
    <div className="login-container">
      <form className="login">
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
