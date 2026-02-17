import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router";
import { type RouterContextInterface } from "./interfaces/interfaces";

export function AppRouter() {
  // const auth = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{ auth: {} as RouterContextInterface }}
    />
  );
}
