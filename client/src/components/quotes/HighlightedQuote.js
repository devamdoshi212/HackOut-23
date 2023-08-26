import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    // <figure className={classes.quote}>
    //   <p>{props.diseasename}</p>
    //   <figcaption>{props.description}</figcaption>
    // </figure>
    <div className={classes.container}>
    <h1>{props.diseasename}</h1>

  
    <div className={classes.quote} id='description'>
      <h1>Description</h1>
      <p>{props.description}</p>
    </div>
    <div className={classes.quote} id='symptoms'>
    <h1>Symptoms</h1>
      <p>{props.symptoms}</p>
    </div>
    <div className={classes.quote} id='remedies'>
    <h1>Remedies</h1>
      <p>{props.remedies}</p>
    </div>
    <div className={classes.quote} id='precaution'>
    <h1>Precaution</h1>
      <p>{props.precaution}</p>
    </div>
    <div className={classes.quote} id='emergency_contact'>
    <h1>Emergency Contact</h1>
      <p>{props.emergency_contact}</p>
    </div>
    <div className={classes.quote} id='general_contact'>
    <h1>General Contact</h1>
      <p>{props.general_contact}</p>
    </div>
    </div>
  
  );
};

export default HighlightedQuote;
