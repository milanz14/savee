// React specific dependencies
import { useState } from "react";

// React-Router
import { Link, useNavigate } from "react-router-dom";

// Components
import Button from "./Button";

// Interfaces/types
import { LoginRegisterData } from "../interfaces/users";

// Auth
import { useAuth } from "../contexts/AuthContext";
import { auth, usersCollection } from "../config/firebase";

// Validations
import { registerSchema } from "../validations/UserValidation";

// library imports
import { useFormik } from "formik";

const Register = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<string>("");
  const [alertClass, setAlertClass] = useState<string>("");

  const { register } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (values: LoginRegisterData, actions: any) => {
    setIsLoading(true);
    register(values.email, values.password)
      .then((user: any) => {
        auth.onAuthStateChanged((user) => {
          usersCollection.doc(user?.uid).set({
            name: values.name,
            email: values.email,
          });
          user?.updateProfile({
            displayName: values.name,
          });
        });
        console.log("Display name set!");
        console.log("User added to users collection!");
      })
      .then(() => {
        setAlerts("Successfully signed up!");
        setAlertClass("alert alert-success");
        setIsLoading(false);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch(() => {
        setAlerts("Failed to Create an account");
        setAlertClass("alert alert-danger");
      });
    setIsLoading(false);
    actions.resetForm();
  };

  // desctructure the methods required from Formik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = e.target;
  //   setUserData((data) => ({
  //     ...data,
  //     [name]: value,
  //   }));
  // };

  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   // post to Firebase API for Registration
  //   setIsLoading(true);
  //   register(userData.email, userData.password)
  //     .then(() => {
  //       setAlerts("Successfully signed up!");
  //       setAlertClass("alert alert-success");
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 1000);
  //     })
  //     .catch(() => {
  //       setAlerts("Failed to Create an account");
  //       setAlertClass("alert alert-danger");
  //     });
  //   setIsLoading(false);
  //   clearInputs();
  // };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "75vh" }}
    >
      <div
        className="card d-flex align-items-center w-100 shadow-box py-5"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Register</h2>
        <div className="container d-flex w-80 justify-content-center">
          {alerts && (
            <div className={alertClass} role="alert">
              {alerts}
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="d-flex flex-column w-75 align-items-stretch justify-content-center py-2"
        >
          <input
            name="name"
            id="name"
            type="text"
            placeholder="First Name"
            className={
              errors.name && touched.name
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className={
              errors.email && touched.email
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className={
              errors.password && touched.password
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error form-control my-1"
                : "form-control my-1"
            }
            onChange={handleChange}
            value={values.confirmPassword}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <Button
            buttonText="Register"
            isLoading={isLoading}
            btnClass="btn btn-primary my-2"
          />
          <div className="d-flex justify-content-center">
            <div className="mt-2">
              Have an account?{" "}
              <span>
                <Link to="/login">Sign in here.</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
