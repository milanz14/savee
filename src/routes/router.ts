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
  beforeLoad: ({ context }) => {
    const { user, isLoading } = context.auth;
    if (isLoading) return;
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
