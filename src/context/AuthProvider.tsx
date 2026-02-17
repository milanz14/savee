import { useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../lib/firebase";

import type {
  User,
  AuthProviderProps,
  AuthResult,
} from "../interfaces/interfaces";

import { FirebaseError } from "firebase/app";
import type { Auth } from "firebase/auth";

import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerWithEmail = async (
    auth: Auth,
    email: string,
    password: string,
  ): Promise<AuthResult> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, message: "Registration successful." };
    } catch (error: unknown) {
      if (
        error instanceof FirebaseError &&
        error.code === "auth/email-already-in-use"
      ) {
        return {
          success: false,
          message: "Unable to register with this email address. Email in use.",
        };
      } else {
        return {
          success: false,
          message: "An unknown error occurred during registration.",
        };
      }
    }
  };

  // const registerWithGmail = () => {};

  const loginWithEmail = async (
    auth: Auth,
    email: string,
    password: string,
  ): Promise<AuthResult> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true, message: "Login successful. Welcome back!" };
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          return {
            success: false,
            message:
              "Login failed. Please check your email and password and try again.",
          };
        }
      }
      return { success: false, message: "Error. Login failed" };
    }
  };
  // const loginWithGmail = () => {};

  const logoutEmail = async (auth: Auth): Promise<void> => {
    await signOut(auth);
  };
  // const logoutGmail = () => {};

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      registerWithEmail,
      // registerWithGmail,
      loginWithEmail,
      // loginWithGmail,
      logoutEmail,
      // logoutGmail,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
