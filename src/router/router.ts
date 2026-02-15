import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import Dashboard from "../pages/Dashboard";
import App from "../App";

const rootRoute = createRootRoute({
  component: () => App,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => Dashboard,
});

const routeTree = rootRoute.addChildren({
  dashboardRoute,
});

export const router = createRouter({
  routeTree,
});
