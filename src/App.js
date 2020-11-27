import { useContext } from "react";
import { DataContext } from "./Context/ContextProvider";
import { Student } from "./components/Students";

import styles from "./App.module.css";

function App() {
  const { myData, handleDispatch } = useContext(DataContext);
  console.log(handleDispatch);

  return (
    <div className={styles.container}>
      <h1 className={styles.std_heading}>Leaderboard</h1>
      {myData.map(({ name, uni, score, id }, index) => (
        <Student key={id} id={id} name={name} uni={uni} score={score} />
      ))}
    </div>
  );
}

export default App;
