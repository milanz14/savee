import { createContext, useEffect, useMemo, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import type {
  AuthContextInterface,
  User,
  AuthProviderProps,
} from "../interfaces/interfaces";

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const auth = getAuth();

  const register = () => {};

  const login = () => {};

  const logout = () => {};

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: User) => {
      setUser(firebaseUser ?? null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      register,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
