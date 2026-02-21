import "./index.css";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </QueryClientProvider>,
);
