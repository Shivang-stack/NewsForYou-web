import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=7baebdc7f11c4b1c8b757bd78097e88f`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
