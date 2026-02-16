import { useMemo, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import type { User, AuthProviderProps } from "../interfaces/interfaces";
import type { Auth } from "firebase/auth";

import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const auth = getAuth();

  const registerWithEmail = async (
    auth: Auth,
    email: string,
    password: string,
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const registerWithGmail = () => {};

  const loginWithEmail = () => {};
  const loginWithGmail = () => {};

  const logoutEmail = () => {};
  const logoutGmail = () => {};

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      registerWithEmail,
      registerWithGmail,
      loginWithEmail,
      loginWithGmail,
      logoutEmail,
      logoutGmail,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
