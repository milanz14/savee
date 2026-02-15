import type { AuthContextInterface } from "../interfaces/interfaces";
import { createContext, useContext } from "react";

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
