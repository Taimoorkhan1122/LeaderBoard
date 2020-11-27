import { useContext } from "react";
import { DataContext, DataContextProvider } from "./Context/ContextProvider";
import { Student } from "./components/Students";

import styles from "./App.module.css";

function App() {
  const data = useContext(DataContext);

  return (
    <DataContextProvider>
      <div className={styles.container}>
        <h1 className={styles.std_heading}>Leaderboard</h1>
        {data.map(({ name, uni, score }, index) => (
          <Student key={index + 1} name={name} uni={uni} score={score} />
        ))}
      </div>
    </DataContextProvider>
  );
}

export default App;
