import { NavLink } from "react-router-dom";

import classes from "./DetailQuoteNavbar.module.css";

const DetailQuoteNavbar = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Remedies
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Precaution
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Visual Content
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DetailQuoteNavbar;
