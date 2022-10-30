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

const UpdateProfile = (): JSX.Element => {
  const UPDATE_INITIAL_STATE: LoginRegisterData = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState<LoginRegisterData>(UPDATE_INITIAL_STATE);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { currentUser, updateEmail, updatePassword } = useAuth();

  const navigate = useNavigate();

  const clearInputs = (): void => {
    setUserData(UPDATE_INITIAL_STATE);
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
    if (userData.password !== userData.confirmPassword) {
      setAlerts("Passwords must match if you are updating your password.");
      setAlertClass("alert alert-danger");
      clearInputs();
      return;
    }
    setIsLoading(true);
    const promises = [];
    if (userData.email !== currentUser.email) {
      promises.push(updateEmail(userData.email));
    }
    if (userData.password) {
      promises.push(updatePassword(userData.password));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        setAlerts("Failed to update account");
        setAlertClass("alert alert-danger");
      })
      .finally(() => {
        setIsLoading(false);
      });
    clearInputs();
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="card d-flex align-items-center w-100 py-5" style={{ maxWidth: "500px" }}>
        <h2 className="py-2">Update Profile</h2>
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
          autoComplete="off">
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
            placeholder="Password - Leave blank to keep same"
            className="form-control my-1"
            value={userData.password}
            onChange={handleInputChange}
          />
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password - Leave blank to keep same"
            className="form-control my-1"
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          <Button buttonText="Update Profile" isLoading={isLoading} btnClass="btn btn-primary" />

          <div className="d-flex flex-column align-items-center">
            <div className="mt-2">
              <span>
                <Link to="/profile">Cancel</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
