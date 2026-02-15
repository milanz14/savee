import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //
  const auth = getAuth();

  const register = () => {};

  const login = () => {};

  return (
    <AuthContext.Provider value={{ user, loading, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
