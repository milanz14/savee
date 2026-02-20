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

type PageId = "landing" | "auth" | "dashboard";

interface NavLinks {
  id: PageId;
  label: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  activePage: PageId;
  onHavigate: (page: PageId) => void;
}

interface MainContentProps {
  activePage: PageId;
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
  PageId,
  NavLinks,
  SidebarProps,
  MainContentProps,
};
