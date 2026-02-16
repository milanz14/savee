import { type User } from "firebase/auth";

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
  registerWithEmail: (email: string, password: string) => Promise<AuthResult>;
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

export type {
  User,
  Transaction,
  AuthContextInterface,
  AuthProviderProps,
  AuthResult,
};
