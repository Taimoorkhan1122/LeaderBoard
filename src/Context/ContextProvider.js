import { createContext, useReducer } from "react";
import { data } from "./data";
import { AppReducer } from "./Reducer";

const initialState = { data };
export const DataContext = createContext(initialState);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log("initialState: ", initialState);

  const handleDispatch = (message) => dispatch(message);

  return (
    <DataContext.Provider value={{ myData: state.data, handleDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
