import { ReactNode } from "react";

export interface RouteItem {
  name: string;
  path: string;
  element: ReactNode;
  children?: RouteItem[];
  withoutAppShell?: boolean;
  icon?: ReactNode;
}
