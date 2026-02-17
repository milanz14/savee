import { User } from "firebase/auth";
declare module "@tankstack/react-router" {
  export interface RegisterContextInterface {
    auth: {
      use: User | null;
      loading: boolean;
    };
  }
}
