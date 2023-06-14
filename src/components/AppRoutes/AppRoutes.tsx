import { Routes, Route } from "react-router-dom";

import AppShell from "../AppShell/AppShell";
import * as RoutePaths from "../../constants/routeNames";
import { routeMapping } from "../../constants/routeMapping";

function AppRoutes() {
  const renderRoutes = (useAppShell: boolean) => {
    if (useAppShell) {
      return routeMapping.map((route) => {
        if (!route.withoutAppShell) {
          if (route.children) {
            return (
              <Route path={route.path} element={route.element} key={route.name}>
                {route.children.map((innerRoute) => {
                  return (
                    <Route
                      path={innerRoute.path}
                      element={innerRoute.element}
                      key={innerRoute.name}
                    />
                  );
                })}
              </Route>
            );
          } else {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.name}
              />
            );
          }
        }
      });
    } else {
      return routeMapping.map((route) => {
        if (route.withoutAppShell) {
          return (
            <Route path={route.path} element={route.element} key={route.name} />
          );
        }
      });
    }
  };

  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<AppShell />}>
        {renderRoutes(true)}
      </Route>
      {renderRoutes(false)}
    </Routes>
  );
}

export default AppRoutes;
