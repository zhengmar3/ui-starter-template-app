import { RouteItem } from "../../types/types";
import * as RoutePaths from "../../constants/routeNames";
import Dashboard from "../Dashboard/Dashboard";

export const routeMapping: RouteItem[] = [
  {
    name: "Dashboard",
    path: RoutePaths.HOME,
    element: <Dashboard />,
  },
];
