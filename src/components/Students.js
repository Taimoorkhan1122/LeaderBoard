import { Button } from "@material-ui/core";
import { ArrowDropUp, ArrowDropDown } from "@material-ui/icons";
import styles from "./Student.module.css";

export const Student = ({ name, score, uni }) => {
  return (
    <div className={styles.student}>
      <div className={styles.std_data}>
        <h2>{name}</h2>
        <p>{uni}</p>
        <Button variant="contained">
          <ArrowDropUp />
        </Button>
        <Button variant="contained">
          <ArrowDropDown />
        </Button>
      </div>
      <h4>{score}</h4>
    </div>
  );
};
