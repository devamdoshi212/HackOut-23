import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  console.log(loadedQuote);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.data.diseasename) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        diseasename={loadedQuote.data.diseasename}
        description={loadedQuote.data.description}
        symptoms={loadedQuote.data.symptoms}
        remedies={loadedQuote.data.remedies}
        precaution={loadedQuote.data.precaution}
        emergency_contact={loadedQuote.data.emergency_contact}
        general_contact={loadedQuote.data.general_contact}
      />
    </Fragment>
  );
};

export default QuoteDetail;
