import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Health & Care</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/dashboard/pastdiseases"
              activeClassName={classes.active}
            >
              Past Disease
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/currentdiseases"
              activeClassName={classes.active}
            >
              Current Disease
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
