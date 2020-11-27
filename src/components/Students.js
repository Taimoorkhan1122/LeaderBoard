import { Button } from "@material-ui/core";
import { useContext } from "react";
import { DataContext } from "../Context/ContextProvider";
import { ArrowDropUp, ArrowDropDown } from "@material-ui/icons";
import styles from "./Student.module.css";

export const Student = ({ name, score, uni, id }) => {
  const { handleDispatch } = useContext(DataContext);
  //   const handleClick = (message) => handleDispatch(message);
  return (
    <div className={styles.student}>
      <div className={styles.std_data}>
        <h2>{name}</h2>
        <p>{uni}</p>
        <Button
          variant="contained"
          onClick={() => handleDispatch({ type: "INCREMENT", payload: id })}
        >
          <ArrowDropUp />
        </Button>{" "}
        <Button
          variant="contained"
          onClick={() => handleDispatch({ type: "DECREMENT", payload: id })}
        >
          <ArrowDropDown />
        </Button>
      </div>
      <h4>{score}</h4>
    </div>
  );
};
