import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import Dashboard from "../pages/Dashboard";
import App from "../App";
import Landing from "../pages/Landing";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Landing,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

const routeTree = rootRoute.addChildren({
  indexRoute,
  dashboardRoute,
});

export const router = createRouter({
  routeTree,
});
