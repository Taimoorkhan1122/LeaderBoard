import { createContext, useReducer } from "react";
import { data } from "./data";
import { AppReducer } from "./Reducer";

export const DataContext = createContext(data);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, data);
  console.log("data: ", state);

  const handleDispatch = (message) => dispatch(message);

  return (
    <DataContext.Provider value={{ myData: state, handleDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
