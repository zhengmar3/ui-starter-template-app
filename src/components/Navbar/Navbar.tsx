import {
  AppSideBar,
  AppSideBarItem,
  AppSideBarNestedMenu,
} from "@r3-ui-test/ui-organism-library";
import { Link, useLocation } from "react-router-dom";

import * as RoutePaths from "../../constants/routeNames";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <AppSideBar closeOnClickAway={false}>
      <AppSideBarNestedMenu multipleActiveItems={true}>
        <AppSideBarItem
          component={Link}
          to={RoutePaths.HOME}
          selected={pathname === RoutePaths.HOME}
          icon={<DashboardRoundedIcon />}
          text={"Dashboard"}
        />
      </AppSideBarNestedMenu>
    </AppSideBar>
  );
}

export default NavBar;
