import ReactDOM from "react-dom";
import { DataContextProvider } from "./Context/ContextProvider";
import App from "./App";

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.querySelector("#root")
);
