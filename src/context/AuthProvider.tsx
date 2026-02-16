import { useMemo, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import type {
  User,
  AuthProviderProps,
  AuthResult,
} from "../interfaces/interfaces";

import { FirebaseError } from "firebase/app";
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
  ): Promise<AuthResult> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setUser(user);
      return { success: true, message: "Registration successful." };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        return { success: false, message: error.message };
      } else {
        return { success: false, message: "Registration failed." };
      }
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
