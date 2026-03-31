import { type User } from "firebase/auth";

interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  transactionType: string;
}

interface TransactionPayload {
  amount: number;
  category: string;
  date: string;
  description: string;
  transactionType: string;
  uid: string;
}

interface AuthContextInterface {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  registerWithEmail: (
    name: string,
    email: string,
    password: string,
  ) => Promise<AuthResult>;
  loginWithEmail: (email: string, password: string) => Promise<AuthResult>;
  logoutEmail: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthResult {
  success: boolean;
  message: string;
}

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface TransactionFormValues {
  amount: number;
  category: string;
  date: Date;
  description: string;
  transactionType: string;
}

interface Category {
  [key: string]: string;
}

interface RouterContextInterface {
  auth: AuthContextInterface;
}

interface NavLinks {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  setModalOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

interface MainContentProps {
  activePage: string;
}

export type {
  User,
  Transaction,
  TransactionPayload,
  AuthContextInterface,
  AuthProviderProps,
  AuthResult,
  RegisterFormValues,
  TransactionFormValues,
  Category,
  RouterContextInterface,
  NavLinks,
  SidebarProps,
  MainContentProps,
};
