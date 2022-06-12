import React, { useContext, useEffect, useReducer } from "react";
import { SET_LOADING, SET_NEWS, SET_FILTER, SET_ALL } from "./actions";

import reducer from "./reducer";
const API_ENDPOINT =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const initialState = {
  isLoading: true,
  buttons: [],
  news: [],
  articles: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNews = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const data = await fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error();
        } else {
          return response.json();
        }
      });
      dispatch({
        type: SET_NEWS,
        payload: {
          news: data.results,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setSection = (artc) => {
    if (artc === "all") {
      dispatch({
        type: SET_ALL,
      });
      return;
    }
    dispatch({
      type: SET_FILTER,
      payload: { filter: artc },
    });
  };

  useEffect(() => {
    fetchNews(`${API_ENDPOINT}${API_KEY}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, setSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
