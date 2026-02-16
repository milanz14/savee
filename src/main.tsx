import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/router.ts";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
