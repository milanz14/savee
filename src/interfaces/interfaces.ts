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
  login: () => void;
  logout: () => void;
  register: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export type { User, Transaction, AuthContextInterface, AuthProviderProps };
