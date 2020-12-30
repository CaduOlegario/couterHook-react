import React, { useContext } from "react";
import styles from "./Counter.module.css";
import { ContextCounter } from "../ContextCounter";

const Counter = () => {
  const [count, setCount] = useContext(ContextCounter);

  return (
    <div className={styles.center}>
      <div className={styles.counter}>{count}</div>
      <button
        className={styles.button}
        onClick={() => setCount((before) => before - 1)}
      >
        -
      </button>
      <button
        className={styles.button}
        onClick={() => setCount((before) => before + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
