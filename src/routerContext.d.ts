import { User } from "firebase/auth";
declare module "@tanstack/react-router" {
  export interface RegisterContextInterface {
    auth: {
      use: User | null;
      loading: boolean;
    };
  }
}
