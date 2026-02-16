import "./index.css";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>,
);
