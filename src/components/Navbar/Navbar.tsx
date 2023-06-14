import {
  AppSideBar,
  AppSideBarItem,
  AppSideBarNestedMenu,
} from "@r3-ui-test/ui-organism-library";
import { Link, useLocation } from "react-router-dom";

import { routeMapping } from "../../constants/routeMapping";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <AppSideBar closeOnClickAway={false}>
      <AppSideBarNestedMenu multipleActiveItems={true}>
        {routeMapping.map((route) => (
          <AppSideBarItem
            key={route.name}
            component={Link}
            to={route.path}
            selected={pathname === route.path}
            icon={route.icon}
            text={route.name}
          />
        ))}
      </AppSideBarNestedMenu>
    </AppSideBar>
  );
}

export default NavBar;
