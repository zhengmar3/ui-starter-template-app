import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ViewArrayRoundedIcon from "@mui/icons-material/ViewArrayRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";

import { RouteItem } from "../types/types";
import * as RoutePaths from "./routeNames";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";

export const routeMapping: RouteItem[] = [
  {
    name: "Dashboard",
    path: RoutePaths.HOME,
    element: <Dashboard />,
    icon: <DashboardRoundedIcon />,
  },
  {
    name: "Login",
    path: RoutePaths.AUTH,
    element: <Login />,
    withoutAppShell: true,
    icon: <VpnKeyRoundedIcon />,
  },
];
