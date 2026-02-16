import {
  createRouter,
  createRootRoute,
  createRoute,
  redirect,
} from "@tanstack/react-router";

import App from "../App";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

import { type User } from "firebase/auth";

const rootRoute = createRootRoute({
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
  beforeLoad: ({ context }) => {
    const { user, loading } = context.auth;
    if (loading) return;
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
  context: {
    auth: {} as { auth: { user: User | null; loading: boolean } },
  },
});
