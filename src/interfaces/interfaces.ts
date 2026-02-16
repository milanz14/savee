import { type Auth, type User } from "firebase/auth";

interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: Date;
  description: string;
  type: string;
}

interface AuthContextInterface {
  user: User | null;
  isAuthenticated: boolean;
  registerWithEmail: (
    auth: Auth,
    email: string,
    password: string,
  ) => Promise<AuthResult>;
  registerWithGmail: () => void;
  loginWithEmail: () => void;
  loginWithGmail: () => void;
  logoutEmail: () => void;
  logoutGmail: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthResult {
  success: boolean;
  message: string;
}

interface RegisterFormValues {
  email: string;
  password: string;
}

interface TransactionFormValues {
  amount: number;
  category: string;
  date: Date;
  description: string;
  type: string;
}

export type {
  User,
  Transaction,
  AuthContextInterface,
  AuthProviderProps,
  AuthResult,
  RegisterFormValues,
  TransactionFormValues,
};
