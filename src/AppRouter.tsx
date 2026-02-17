import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router";
import { useAuth } from "./context/AuthContext";

export function AppRouter() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}
