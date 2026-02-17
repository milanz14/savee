import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { type RouterContextInterface } from "../interfaces/interfaces";

interface MyRouterContext {
  auth: RouterContextInterface;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
