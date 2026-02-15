import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import App from "../App";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";

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
  component: Dashboard,
});

const routeTree = rootRoute.addChildren({
  indexRoute,
  authRoute,
  dashboardRoute,
});

export const router = createRouter({
  routeTree,
});
