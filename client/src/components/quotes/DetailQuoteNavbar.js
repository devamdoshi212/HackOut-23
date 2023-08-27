import { NavLink } from "react-router-dom";

import classes from "./DetailQuoteNavbar.module.css";

const DetailQuoteNavbar = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <button
              className={classes.btn}
              onClick={() => {
                props.id("remedies");
              }}
            >
              Remedies
            </button>
          </li>
          <li>
            <button
              className={classes.btn}
              onClick={() => {
                props.id("precaution");
              }}
            >
              Precaution
            </button>
          </li>
          <li>
            <button
              className={classes.btn}
              onClick={() => {
                props.id("visualcontent");
              }}
            >
              Visual Content
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DetailQuoteNavbar;
