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
  isLoading: boolean;
  isAuthenticated: boolean;
  registerWithEmail: (
    auth: Auth,
    email: string,
    password: string,
  ) => Promise<AuthResult>;
  loginWithEmail: (
    auth: Auth,
    email: string,
    password: string,
  ) => Promise<AuthResult>;
  logoutEmail: (auth: Auth) => Promise<void>;
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

interface RouterContextInterface {
  auth: AuthContextInterface;
}

export type {
  User,
  Transaction,
  AuthContextInterface,
  AuthProviderProps,
  AuthResult,
  RegisterFormValues,
  TransactionFormValues,
  RouterContextInterface,
};
