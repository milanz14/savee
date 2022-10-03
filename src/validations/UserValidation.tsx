import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("First name is required."),
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be a minimum of 6 characters.")
    .max(40, "Password must not exceed 40 characters.")
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Your email is required."),
  password: yup.string().required("Your password is required."),
});

const transactionSchema = yup.object().shape({
  category: yup.string().required("Category is required."),
  description: yup.string().required("Description is required."),
  amount: yup.number().required("Transaction amount is required."),
});

export { registerSchema, loginSchema, transactionSchema };
