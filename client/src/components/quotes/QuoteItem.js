import { Link } from "react-router-dom";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.name}</p>
        </blockquote>
        <figcaption>{props.description}</figcaption>
      </figure>
      <Link className={classes.btn} to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
