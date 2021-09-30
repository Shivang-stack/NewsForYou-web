import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "7baebdc7f11c4b1c8b757bd78097e88f";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=indias&from=2021-09-12&sortBy=publishedAt&apiKey=${apiKey}`
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
//https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&apiKey=&{apikey}