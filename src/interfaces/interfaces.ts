import { type User } from "firebase/auth";

interface Transaction {
  amount: number;
  category: string;
  description: string;
  transactionType: string;
  id: string;
}

interface TransactionPayload {
  amount: number;
  category: string;
  description: string;
  transactionType: string;
  date: string;
  uid: string;
}

type UserCreatedCategory = {
  name: string;
  colour: string;
};

type UserCreatedBudget = {
  name: string;
  amount: number;
  colour: string;
};

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
  UserCreatedCategory,
  UserCreatedBudget,
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
