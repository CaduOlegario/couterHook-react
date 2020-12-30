import React, { useContext } from "react";
import styles from "./Header.module.css";
import { ContextCounter } from "../ContextCounter";

const Header = () => {
  const [count, setCount] = useContext(ContextCounter);
  return (
    <header className={styles.header}>
      <h3 className={styles.counter}>Contador</h3>
      <div className={styles.counter}>{count}</div>
    </header>
  );
};

export default Header;
