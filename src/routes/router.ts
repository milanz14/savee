import {
  createRouter,
  createRoute,
  redirect,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import App from "../App";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import type { RouterContextInterface } from "../interfaces/interfaces";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const rootRoute = createRootRouteWithContext<RouterContextInterface>()({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Landing,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: Auth,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  beforeLoad: async () => {
    const user = await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
    if (!user) {
      throw redirect({ to: "/auth" });
    }
  },
  component: Dashboard,
});

const routeTree = rootRoute.addChildren({
  indexRoute,
  authRoute,
  dashboardRoute,
});

export const router = createRouter({
  routeTree,
  context: undefined!,
});
