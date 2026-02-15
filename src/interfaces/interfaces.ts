interface User {
  uid: string;
  email: string;
  password: string;
  createdAt: Date;
}

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
  registerWithEmail: () => void;
  registerWithGmail: () => void;
  loginWithEmail: () => void;
  loginWithGmail: () => void;
  logoutEmail: () => void;
  logoutGmail: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export type { User, Transaction, AuthContextInterface, AuthProviderProps };
