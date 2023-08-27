import classes from "./HighlightedQuote.module.css";
import DetailQuoteNavbar from "./DetailQuoteNavbar";
import ReactPlayer from "react-player";
const HighlightedQuote = (props) => {
  const scrolltosection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={classes.navbar}>
        <DetailQuoteNavbar id={scrolltosection}></DetailQuoteNavbar>
      </div>
      <div className={classes.container}>
        <h1 id={classes.title}>{props.diseasename}</h1>

        <div className={classes.quote} id="description">
          <h1>Description</h1>
          <p>{props.description}</p>
        </div>
        <div className={classes.quote} id="symptoms">
          <h1>Symptoms</h1>
          <p>{props.symptoms}</p>
        </div>
        <div className={classes.quote} id="remedies">
          <h1>Remedies</h1>
          <p>{props.remedies}</p>
        </div>
        <div className={classes.quote} id="precaution">
          <h1>Precaution</h1>
          <p>{props.precaution}</p>
        </div>
        <div className={classes.quote} id="visualcontent">
          <h1>Visual Content</h1>
          <div>
            <ReactPlayer url={props.visualcontent} />
          </div>
        </div>
        <div className={classes.quote} id="emergency_contact">
          <h1>Emergency Contact</h1>
          <p>{props.emergency_contact}</p>
        </div>
        <div className={classes.quote} id="general_contact">
          <h1>General Contact</h1>
          <p>{props.general_contact}</p>
        </div>
      </div>
    </>
  );
};

export default HighlightedQuote;
