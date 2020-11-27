import { createContext, useContext } from "react";
import { data } from "./data";

export const DataContext = createContext(data);

export const DataContextProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
