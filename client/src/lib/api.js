const FIREBASE_DOMAIN = "https://food-app-92ca5-default-rtdb.firebaseio.com/";

export async function getAllQuotes() {
  const response = await fetch("http://localhost:9999/GetAllDisease");

  try {
    const data = await response.json();
    const result = data.data;
    // console.log(result._id);
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch quotes.");
    }

    const transformedQuotes = [];

    for (const key in result) {
      const quoteObj = {
        id: result[key]._id,
        ...result[key],
      };
      transformedQuotes.push(quoteObj);
    }
    console.log(transformedQuotes);
    return transformedQuotes;
  } catch (e) {
    console.log(e);
  }
}

export async function getSingleQuote(quoteId) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  try {
    var raw = "";

    var requestOptions = {
      method: "GET",
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:9999/GetDiseaseById/${quoteId}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch quote.");
    }

    const loadedQuote = {
      id: quoteId,
      ...data,
    };
    console.log(loadedQuote);
    return loadedQuote;
  } catch (e) {
    console.log(e);
  }
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
