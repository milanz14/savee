import type { AuthContextInterface } from "../interfaces/interfaces";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextInterface | null>(null);
